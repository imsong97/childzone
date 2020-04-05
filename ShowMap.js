const inputData = document.getElementById("adress"),
    btnSearch = document.getElementById("search");

function getMap(currentLat, currentLon){
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(currentLat, currentLon),
        level: 3
    };
    var map = new kakao.maps.Map(container, options);

    var imageSrc = 'icon1.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    //마커 표시
    var markerPosition  = new kakao.maps.LatLng(currentLat, currentLon); 
    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });
    marker.setMap(map);

    //지도타입
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    //지도 확대축소
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT); 
}

function init(){
    navigator.geolocation.getCurrentPosition(function(position) { //현재위치
        
        const currentLat = position.coords.latitude, // 위도
        currentLon = position.coords.longitude; // 경도
        
        getMap(currentLat, currentLon);
    });
}

init();


