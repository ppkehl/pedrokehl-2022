<input class="lg:hidden" title="Toggle Menu" id="menu-toggle" type="checkbox" />
<label class="cursor-pointer lg:hidden z-50" for="menu-toggle" aria-label="Menu">
  <span class="bg-gray-900 dark:bg-white" />
  <span class="bg-gray-900 dark:bg-white" />
  <span class="bg-gray-900 dark:bg-white" />
  <span class="bg-gray-900 dark:bg-white" />
  <span class="bg-gray-900 dark:bg-white" />
  <span class="bg-gray-900 dark:bg-white" />
</label>

<nav class="fixed lg:relative top-16 lg:top-0 w-full lg:w-auto left-full lg:left-0 h-screen lg:h-auto transition-all duration-200 bg-gray-200 dark:bg-gray-900 lg:dark:bg-transparent lg:bg-transparent bg-opacity-50 dark:bg-opacity-50 lg:bg-opacity-100 backdrop-blur-xl lg:backdrop-blur-none">
  <ul class="relative top-16 lg:top-0 container m-auto px-6 pt-20 lg:pt-0 space-y-4 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row dark:text-white border-gray-900 dark:border-white">
    <li class="relative block border-t-2 border-solid border-inherit">
      <a class="dark:before:invert" href="#about">
        <div class="text-lg font-semibold">About</div>
        <div class="">Life & Experience</div>
      </a>
    </li>

    <li class="relative block border-t-2 border-solid border-inherit">
      <a class="dark:before:invert" href="#works">
        <div class="text-lg font-semibold">Projects</div>
        <div class="">What I do</div>
      </a>
    </li>

    <li class="relative block border-t-2 border-solid border-inherit">
      <a class="dark:before:invert" href="#ideas">
        <div class="text-lg font-semibold">Ideas</div>
        <div class="">Texts & Thoughts</div>
      </a>
    </li>

    <li class="relative block border-t-2 border-solid border-inherit">
      <a class="dark:before:invert" href="#contact">
        <div class="text-lg font-semibold">Contact</div>
        <div class="">Let's Talk</div>
      </a>
    </li>
  </ul>
</nav>

<style lang="scss">
  a {
    > div:first-child {
      padding-right: 35px;
    }

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background-image: url(../assets/arrow-top.svg);
      background-repeat: no-repeat;
      background-position: right top;
      position: absolute;
      right: 0;
      top: 5px;
    }
  }
  //------------------------------------------------------------------------------------------
  // Mobile Menu Dynamic Switch Styling
  // Require Square Root Function
  // Options:
  // -- Styles:
  // --- symmetric-cross
  // --- symmetric-divide
  // --- asymmetric-eject
  // --- asymmetric-fade
  // --- rotate-cross
  //------------------------------------------------------------------------------------------
  @mixin menu-dynamic-switch-styling(
    $target,
    $style: "symmetric-cross",
    $edge-lenght: 40,
    $line-height: 4,
    $border-radius: 4,
    $transition-speed: 0.25s,
    $unity: 1px
  ) {
    #{$target} {
      opacity: 0;
      position: absolute;
      width: $edge-lenght + $unity;
      height: $edge-lenght + $unity;
      z-index: 1000;
      cursor: pointer;
    }
    #{$target} ~ label {
      width: $edge-lenght + $unity;
      height: $edge-lenght + $unity;
      transform: rotate(0deg);
      transition: $transition-speed ease-in-out;
      span {
        display: block;
        position: absolute;
        height: $line-height + $unity;
        border-radius: $border-radius + $unity;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: $transition-speed ease-in-out;

        @if ($style == "symmetric-cross") {
          width: 100%;
          &:nth-child(1) {
            top: 0;
          }
          &:nth-child(2),
          &:nth-child(3) {
            top: 50%;
            margin-top: calc($line-height/2 * -1) * $unity;
          }
          &:nth-child(4) {
            top: 100%;
            margin-top: calc($line-height * -1) * $unity;
          }
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        } @else if($style == "symmetric-divide") {
          width: 50%;
          &:nth-child(even) {
            left: 50%;
            border-radius: 0
              ($border-radius * $unity)
              ($border-radius * $unity)
              0;
          }
          &:nth-child(odd) {
            left: 0px;
            border-radius: ($border-radius * $unity)
              0
              0
              ($border-radius * $unity);
          }

          &:nth-child(1),
          &:nth-child(2) {
            top: 0;
            transform-origin: left center;
          }

          &:nth-child(3),
          &:nth-child(4) {
            top: 50%;
            margin-top: calc($line-height/2 * -1) * $unity;
          }

          &:nth-child(5),
          &:nth-child(6) {
            top: $edge-lenght - ($line-height) * $unity;
            transform-origin: left center;
          }
        } @else if($style == "asymmetric-eject") {
          width: 100%;
          &:nth-child(1) {
            top: 0;
          }
          &:nth-child(2) {
            top: 50%;
            margin-top: calc($line-height/2) * $unity * -1;
          }
          &:nth-child(3) {
            top: 100%;
            margin-top: ($line-height + $unity) * -1;
          }
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        } @else if($style == "asymmetric-fade") {
          width: 100%;
          &:nth-child(1) {
            top: 0;
            transform-origin: left center;
          }
          &:nth-child(2) {
            top: 50%;
            margin-top: calc($line-height/2) * $unity * -1;
            transform-origin: left center;
          }
          &:nth-child(3) {
            top: 100%;
            margin-top: $line-height * $unity * -1;
            transform-origin: left center;
          }
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        }

        @if ($style == "rotate-cross") {
          width: 100%;
          &:nth-child(1) {
            top: 0;
          }
          &:nth-child(2),
          &:nth-child(3) {
            top: 50%;
            margin-top: calc($line-height/2) * $unity * -1;
          }
          &:nth-child(4) {
            top: 100%;
            margin-top: calc($line-height * $unity) * -1;
          }
          &:nth-child(5),
          &:nth-child(6) {
            display: none;
          }
        }
      }
    }

    #{$target}:checked ~ label {
      @if ($style == "symmetric-cross") {
        span {
          &:nth-child(1) {
            top: calc($edge-lenght/2) + $unity;
            width: 0%;
            left: 50%;
          }
          &:nth-child(2) {
            transform: rotate(45deg);
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
          }
          &:nth-child(4) {
            top: calc($edge-lenght/2) + $unity;
            width: 0%;
            left: 50%;
          }
        }
      } @else if($style == "symmetric-divide") {
        $hypotenuse-squared: ($edge-lenght * $edge-lenght) +
          ($edge-lenght * $edge-lenght);
        $hypotenuse: sqrt($hypotenuse-squared);
        $hypotenuse-edge-margin: calc(($hypotenuse - $edge-lenght) / 2);
        $top-left-diff: sqrt(
          calc(($hypotenuse-edge-margin * $hypotenuse-edge-margin) / 2)
        );
        margin-top: calc($line-height/2 * -1) + $unity;
        margin-bottom: calc($line-height/2) + $unity;
        span {
          &:nth-child(1),
          &:nth-child(6) {
            transform: rotate(45deg);
          }

          &:nth-child(2),
          &:nth-child(5) {
            transform: rotate(-45deg);
          }

          &:nth-child(1) {
            width: 50%;
            transform: rotate(45deg);
            top: $top-left-diff * $unity;
            left: $top-left-diff * $unity;
          }

          &:nth-child(2) {
            left: 50%;
            top: 50%;
          }

          &:nth-child(3) {
            left: -50%;
            opacity: 0;
          }

          &:nth-child(4) {
            left: 100%;
            opacity: 0;
          }

          &:nth-child(5) {
            transform: rotate(-45deg);
            top: $top-left-diff * $unity * -1;
            left: $top-left-diff * $unity;
            margin-top: 100%;
          }

          &:nth-child(6) {
            left: 50%;
            top: 50%;
            margin-top: $line-height;
            margin-left: calc($line-height/2 * -1);
          }
        }
      } @else if($style == "asymmetric-eject") {
        margin-top: calc($line-height/2) * $unity * -1;
        margin-bottom: calc($line-height/2) * $unity;
        span {
          &:nth-child(1) {
            transform: rotate(135deg);
            top: 50%;
            left: 0;
          }

          &:nth-child(2) {
            opacity: 0;
            left: -$edge-lenght + $unity;
          }

          &:nth-child(3) {
            transform: rotate(-135deg);
            top: -50%;
            left: 0;
            margin-top: 100%;
          }
        }
      } @else if($style == "asymmetric-fade") {
        $hypotenuse-squared: ($edge-lenght * $edge-lenght) +
          ($edge-lenght * $edge-lenght);
        $hypotenuse: sqrt($hypotenuse-squared);
        $hypotenuse-edge-margin: calc(($hypotenuse - $edge-lenght) / 2);
        $top-left-diff: sqrt(
          calc(($hypotenuse-edge-margin * $hypotenuse-edge-margin) / 2)
        );

        span {
          &:nth-child(1) {
            transform: rotate(45deg);
            top: $top-left-diff + $unity;
            left: $top-left-diff + $unity;
          }
          &:nth-child(2) {
            width: 0%;
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            top: -$top-left-diff + $unity;
            left: $top-left-diff + $unity;
            margin-top: 100%;
          }
        }
      } @else if($style == "rotate-cross") {
        transform: rotate(180deg);
        span {
          &:nth-child(1) {
            top: calc($edge-lenght/2) + $unity;
            width: 0%;
            left: 50%;
          }
          &:nth-child(2) {
            transform: rotate(45deg);
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
          }
          &:nth-child(4) {
            top: calc($edge-lenght/2) + $unity;
            width: 0%;
            left: 50%;
          }
        }
      }
    }
  }

  @include menu-dynamic-switch-styling(
    "#menu-toggle",
    "symmetric-cross",
    20,
    2
  );

  #menu-toggle:checked {
    ~ nav {
      left: 0;
    }
  }
</style>
