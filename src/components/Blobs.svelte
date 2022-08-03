<div class="blobs absolute left-0 top-0 w-full h-full max-w-[1024px] max-h-[1024px] ">
  <div class="absolute w-10/12 aspect-square filter blur-xl opacity-100 animate-blob-hero dark:opacity-70 animation-spice-1"></div>
  <div class="absolute w-9/12 aspect-square filter blur-xl opacity-100 animate-blob-hero-2 dark:opacity-70 "></div>
  <div class="absolute w-8/12 aspect-square filter blur-xl opacity-100 animate-blob-hero dark:opacity-70 animation-spice-2"></div>
</div>

<style lang="scss">
  .animation-spice-1 {
    animation-delay: 2.5s;
    animation-duration: 8s;
  }
  .animation-spice-2 {
    animation-delay: 4s;
    animation-duration: 10s;
  }
  .animate-blob-hero {
    animation-name: blob-hero;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 12s;
  }
  .animate-blob-hero-2 {
    animation-name: blob-hero-2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 16s;
  }
  .blobs{
    div:nth-child(1){
      border-radius: 30% 70% 70% 30% / 30% 27% 73% 70%;
      top: 10%;
      left: -10%;
      background: radial-gradient(50% 50% at 50% 50%, rgba(var(--primaryColor), 0.8) 0%, rgba(var(--primaryColor), 0) 89.58%); 
    }
    div:nth-child(2){
      border-radius: 30% 70% 70% 30% / 88% 27% 73% 12%;
      top: 30%;
      left: 30%;
      background: radial-gradient(50% 50% at 50% 50%, rgba(var(--secondaryColor), 0.8) 0%, rgba(var(--secondaryColor), 0) 87.5%);
    }
    div:nth-child(3){
      border-radius: 32% 68% 27% 73% / 88% 27% 73% 12%; 
      top: 40%;
      left: 20%;
      background: radial-gradient(50% 50% at 50% 50%, rgba(var(--tertiaryColor), 0.8) 0%, rgba(var(--tertiaryColor), 0) 87.5%);
    }
  }
  @keyframes blob-hero{
    0% {
      transform: translate(0, 0) scale(1);
    }
    33% {
        transform: translate(10%, -10%) scale(1.5);
    }
    66% {
        transform: translate(-20%, 40%) scale(1.2);
    }
    100% {
        transform: tranlate(0, 0) scale(1);
    }
  }
  @keyframes blob-hero-2{
    0% {
      transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(15%, -30%) scale(0.9);
    }
    50% {
        transform: translate(-20%, 43%) scale(1.4);
    }
    75% {
        transform: translate(5%, 20%) scale(1.2);
    }
    100% {
        transform: tranlate(0, 0) scale(1.4);
    }
  }
</style>