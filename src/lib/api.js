// const API_URL = import.meta.env.PUBLIC_API_URL;

// export async function fetchAPI( query='' ) {
//     const res = await fetch( `${API_URL}/${query}` );

//     if ( res.ok ) {
//         return res.json();
//     } else {
//         const error = await res.json();

//         throw new Error(
//             '❗ Failed to fetch API for ' + query + "\n" +
//             'Code: ' + error.code + "\n" +
//             'Message: ' + error.message + "\n"
//         );
//     }
// }

// export async function getProjects() {
//     const data = await fetchAPI( 'projects/' );

//     return data;
// }


const json = '{"data":[{"id":1,"attributes":{"Name":"Ledidi","Description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi, aut vero eveniet laborum pariatur molestiae!","createdAt":"2022-06-30T12:52:55.305Z","updatedAt":"2022-06-30T17:54:32.713Z","publishedAt":"2022-06-30T17:54:32.711Z","slug":"ledidi","Images":{"data":[{"id":2,"attributes":{"name":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","alternativeText":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","caption":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","width":960,"height":640,"formats":{"thumbnail":{"name":"thumbnail_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":234,"height":156,"size":12.23,"url":"/uploads/thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"medium":{"name":"medium_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":500,"size":96.32,"url":"/uploads/medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"small":{"name":"small_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":333,"size":48.56,"url":"/uploads/small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"}},"hash":"3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","size":127.2,"url":"/uploads/3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.339Z","updatedAt":"2022-06-30T13:31:11.339Z"}},{"id":3,"attributes":{"name":"12-leonardo-smania.jpg","alternativeText":"12-leonardo-smania.jpg","caption":"12-leonardo-smania.jpg","width":800,"height":525,"formats":{"thumbnail":{"name":"thumbnail_12-leonardo-smania.jpg","hash":"thumbnail_12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","path":null,"width":238,"height":156,"size":10.2,"url":"/uploads/thumbnail_12_leonardo_smania_dcfb8379bd.jpg"},"medium":{"name":"medium_12-leonardo-smania.jpg","hash":"medium_12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":492,"size":67.34,"url":"/uploads/medium_12_leonardo_smania_dcfb8379bd.jpg"},"small":{"name":"small_12-leonardo-smania.jpg","hash":"small_12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":328,"size":35.23,"url":"/uploads/small_12_leonardo_smania_dcfb8379bd.jpg"}},"hash":"12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","size":58.75,"url":"/uploads/12_leonardo_smania_dcfb8379bd.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.442Z","updatedAt":"2022-06-30T13:31:11.442Z"}},{"id":4,"attributes":{"name":"16-vitchc3a9-jana-joana.jpg","alternativeText":"16-vitchc3a9-jana-joana.jpg","caption":"16-vitchc3a9-jana-joana.jpg","width":1000,"height":681,"formats":{"thumbnail":{"name":"thumbnail_16-vitchc3a9-jana-joana.jpg","hash":"thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":229,"height":156,"size":13.4,"url":"/uploads/thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"medium":{"name":"medium_16-vitchc3a9-jana-joana.jpg","hash":"medium_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":511,"size":102.1,"url":"/uploads/medium_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"small":{"name":"small_16-vitchc3a9-jana-joana.jpg","hash":"small_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":341,"size":51.93,"url":"/uploads/small_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"}},"hash":"16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","size":132.22,"url":"/uploads/16_vitchc3a9_jana_joana_0fc4e2830a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.534Z","updatedAt":"2022-06-30T13:31:11.534Z"}}]},"Cover":{"data":{"id":1,"attributes":{"name":"icon.png","alternativeText":"icon.png","caption":"icon.png","width":763,"height":400,"formats":{"thumbnail":{"name":"thumbnail_icon.png","hash":"thumbnail_icon_6f077205b2","ext":".png","mime":"image/png","path":null,"width":245,"height":128,"size":35.09,"url":"/uploads/thumbnail_icon_6f077205b2.png"},"medium":{"name":"medium_icon.png","hash":"medium_icon_6f077205b2","ext":".png","mime":"image/png","path":null,"width":750,"height":393,"size":236.24,"url":"/uploads/medium_icon_6f077205b2.png"},"small":{"name":"small_icon.png","hash":"small_icon_6f077205b2","ext":".png","mime":"image/png","path":null,"width":500,"height":262,"size":119.28,"url":"/uploads/small_icon_6f077205b2.png"}},"hash":"icon_6f077205b2","ext":".png","mime":"image/png","size":84.65,"url":"/uploads/icon_6f077205b2.png","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T12:52:51.318Z","updatedAt":"2022-06-30T12:52:51.318Z"}}}}},{"id":2,"attributes":{"Name":"SBAC","Description":"Etiam augue urna, vestibulum id sodales placerat, venenatis quis nisi. Vivamus eget eros suscipit, hendrerit massa dapibus, consequat felis. Sed tincidunt id arcu quis tristique. In molestie feugiat venenatis. Nam ac urna nunc. Donec nibh odio, interdum eget luctus ut, aliquet sit amet ligula. ","createdAt":"2022-06-30T13:34:30.159Z","updatedAt":"2022-06-30T17:54:59.020Z","publishedAt":"2022-06-30T17:54:59.019Z","slug":"sbac","Images":{"data":[{"id":4,"attributes":{"name":"16-vitchc3a9-jana-joana.jpg","alternativeText":"16-vitchc3a9-jana-joana.jpg","caption":"16-vitchc3a9-jana-joana.jpg","width":1000,"height":681,"formats":{"thumbnail":{"name":"thumbnail_16-vitchc3a9-jana-joana.jpg","hash":"thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":229,"height":156,"size":13.4,"url":"/uploads/thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"medium":{"name":"medium_16-vitchc3a9-jana-joana.jpg","hash":"medium_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":511,"size":102.1,"url":"/uploads/medium_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"small":{"name":"small_16-vitchc3a9-jana-joana.jpg","hash":"small_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":341,"size":51.93,"url":"/uploads/small_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"}},"hash":"16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","size":132.22,"url":"/uploads/16_vitchc3a9_jana_joana_0fc4e2830a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.534Z","updatedAt":"2022-06-30T13:31:11.534Z"}},{"id":2,"attributes":{"name":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","alternativeText":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","caption":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","width":960,"height":640,"formats":{"thumbnail":{"name":"thumbnail_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":234,"height":156,"size":12.23,"url":"/uploads/thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"medium":{"name":"medium_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":500,"size":96.32,"url":"/uploads/medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"small":{"name":"small_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":333,"size":48.56,"url":"/uploads/small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"}},"hash":"3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","size":127.2,"url":"/uploads/3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.339Z","updatedAt":"2022-06-30T13:31:11.339Z"}}]},"Cover":{"data":{"id":5,"attributes":{"name":"sbac-cover.png","alternativeText":"sbac-cover.png","caption":"sbac-cover.png","width":625,"height":383,"formats":{"thumbnail":{"name":"thumbnail_sbac-cover.png","hash":"thumbnail_sbac_cover_16b97ce8ca","ext":".png","mime":"image/png","path":null,"width":245,"height":150,"size":21.3,"url":"/uploads/thumbnail_sbac_cover_16b97ce8ca.png"},"small":{"name":"small_sbac-cover.png","hash":"small_sbac_cover_16b97ce8ca","ext":".png","mime":"image/png","path":null,"width":500,"height":306,"size":55.54,"url":"/uploads/small_sbac_cover_16b97ce8ca.png"}},"hash":"sbac_cover_16b97ce8ca","ext":".png","mime":"image/png","size":13.05,"url":"/uploads/sbac_cover_16b97ce8ca.png","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:34:21.426Z","updatedAt":"2022-06-30T13:34:21.426Z"}}}}},{"id":3,"attributes":{"Name":"Fazenda do Ipê","Description":"Cras accumsan orci sit amet mauris maximus, quis ultrices purus finibus. Duis vulputate, ante in volutpat mollis, libero nunc congue nunc, eget blandit justo velit eget eros. Morbi justo velit, tincidunt sit amet ligula vitae, vulputate finibus justo. Integer fringilla euismod justo, non mollis justo posuere sit amet.","createdAt":"2022-06-30T13:35:17.641Z","updatedAt":"2022-06-30T17:55:12.327Z","publishedAt":"2022-06-30T17:55:12.326Z","slug":"fazenda-do-ipe","Images":{"data":[{"id":4,"attributes":{"name":"16-vitchc3a9-jana-joana.jpg","alternativeText":"16-vitchc3a9-jana-joana.jpg","caption":"16-vitchc3a9-jana-joana.jpg","width":1000,"height":681,"formats":{"thumbnail":{"name":"thumbnail_16-vitchc3a9-jana-joana.jpg","hash":"thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":229,"height":156,"size":13.4,"url":"/uploads/thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"medium":{"name":"medium_16-vitchc3a9-jana-joana.jpg","hash":"medium_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":511,"size":102.1,"url":"/uploads/medium_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"small":{"name":"small_16-vitchc3a9-jana-joana.jpg","hash":"small_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":341,"size":51.93,"url":"/uploads/small_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"}},"hash":"16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","size":132.22,"url":"/uploads/16_vitchc3a9_jana_joana_0fc4e2830a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.534Z","updatedAt":"2022-06-30T13:31:11.534Z"}},{"id":2,"attributes":{"name":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","alternativeText":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","caption":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","width":960,"height":640,"formats":{"thumbnail":{"name":"thumbnail_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":234,"height":156,"size":12.23,"url":"/uploads/thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"medium":{"name":"medium_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":500,"size":96.32,"url":"/uploads/medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"small":{"name":"small_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":333,"size":48.56,"url":"/uploads/small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"}},"hash":"3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","size":127.2,"url":"/uploads/3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.339Z","updatedAt":"2022-06-30T13:31:11.339Z"}}]},"Cover":{"data":{"id":6,"attributes":{"name":"icon.png","alternativeText":"icon.png","caption":"icon.png","width":763,"height":400,"formats":{"thumbnail":{"name":"thumbnail_icon.png","hash":"thumbnail_icon_96e4262e22","ext":".png","mime":"image/png","path":null,"width":245,"height":128,"size":59.44,"url":"/uploads/thumbnail_icon_96e4262e22.png"},"medium":{"name":"medium_icon.png","hash":"medium_icon_96e4262e22","ext":".png","mime":"image/png","path":null,"width":750,"height":393,"size":463.79,"url":"/uploads/medium_icon_96e4262e22.png"},"small":{"name":"small_icon.png","hash":"small_icon_96e4262e22","ext":".png","mime":"image/png","path":null,"width":500,"height":262,"size":218.04,"url":"/uploads/small_icon_96e4262e22.png"}},"hash":"icon_96e4262e22","ext":".png","mime":"image/png","size":140.92,"url":"/uploads/icon_96e4262e22.png","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:35:10.202Z","updatedAt":"2022-06-30T13:35:10.202Z"}}}}},{"id":4,"attributes":{"Name":"JS | MS","Description":"Vestibulum rhoncus porta massa dignissim tincidunt. Morbi sagittis libero id malesuada viverra. Nulla interdum tincidunt cursus. Duis lacinia ut ligula sit amet porttitor. Nulla aliquam eros at risus pharetra semper. Ut auctor efficitur tortor, vitae pharetra quam rhoncus in. Proin fringilla facilisis libero, a lobortis libero sagittis id.","createdAt":"2022-06-30T13:36:02.033Z","updatedAt":"2022-06-30T17:56:19.275Z","publishedAt":"2022-06-30T17:56:19.274Z","slug":"js-ms","Images":{"data":[{"id":2,"attributes":{"name":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","alternativeText":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","caption":"3D-Street-Art-by-Nikolaj-Arndt-2.jpg","width":960,"height":640,"formats":{"thumbnail":{"name":"thumbnail_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":234,"height":156,"size":12.23,"url":"/uploads/thumbnail_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"medium":{"name":"medium_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":500,"size":96.32,"url":"/uploads/medium_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"},"small":{"name":"small_3D-Street-Art-by-Nikolaj-Arndt-2.jpg","hash":"small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":333,"size":48.56,"url":"/uploads/small_3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg"}},"hash":"3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247","ext":".jpg","mime":"image/jpeg","size":127.2,"url":"/uploads/3_D_Street_Art_by_Nikolaj_Arndt_2_5bb7d98247.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.339Z","updatedAt":"2022-06-30T13:31:11.339Z"}},{"id":3,"attributes":{"name":"12-leonardo-smania.jpg","alternativeText":"12-leonardo-smania.jpg","caption":"12-leonardo-smania.jpg","width":800,"height":525,"formats":{"thumbnail":{"name":"thumbnail_12-leonardo-smania.jpg","hash":"thumbnail_12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","path":null,"width":238,"height":156,"size":10.2,"url":"/uploads/thumbnail_12_leonardo_smania_dcfb8379bd.jpg"},"medium":{"name":"medium_12-leonardo-smania.jpg","hash":"medium_12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":492,"size":67.34,"url":"/uploads/medium_12_leonardo_smania_dcfb8379bd.jpg"},"small":{"name":"small_12-leonardo-smania.jpg","hash":"small_12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":328,"size":35.23,"url":"/uploads/small_12_leonardo_smania_dcfb8379bd.jpg"}},"hash":"12_leonardo_smania_dcfb8379bd","ext":".jpg","mime":"image/jpeg","size":58.75,"url":"/uploads/12_leonardo_smania_dcfb8379bd.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.442Z","updatedAt":"2022-06-30T13:31:11.442Z"}}]},"Cover":{"data":{"id":4,"attributes":{"name":"16-vitchc3a9-jana-joana.jpg","alternativeText":"16-vitchc3a9-jana-joana.jpg","caption":"16-vitchc3a9-jana-joana.jpg","width":1000,"height":681,"formats":{"thumbnail":{"name":"thumbnail_16-vitchc3a9-jana-joana.jpg","hash":"thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":229,"height":156,"size":13.4,"url":"/uploads/thumbnail_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"medium":{"name":"medium_16-vitchc3a9-jana-joana.jpg","hash":"medium_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":511,"size":102.1,"url":"/uploads/medium_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"},"small":{"name":"small_16-vitchc3a9-jana-joana.jpg","hash":"small_16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":341,"size":51.93,"url":"/uploads/small_16_vitchc3a9_jana_joana_0fc4e2830a.jpg"}},"hash":"16_vitchc3a9_jana_joana_0fc4e2830a","ext":".jpg","mime":"image/jpeg","size":132.22,"url":"/uploads/16_vitchc3a9_jana_joana_0fc4e2830a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-06-30T13:31:11.534Z","updatedAt":"2022-06-30T13:31:11.534Z"}}}}}],"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":4}}}';


export async function getProjects() {
    const data = JSON.parse(json);
    return data;
}