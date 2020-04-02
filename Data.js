var data = {
    serviceKey: 'Cubt5vsvLXW2jUIij3GoQkPkrn9MEjJ3bmstr55qXEiUwu3Sevo5t1Nm4arId0zY1BSotjFmf8C%2FZM8Gpeg42Q%3D%3D',
    s_page: 0,
    s_list: 1,
    type: 'json'
};

$.ajax({
    post: 'get',
    url: 'http://api.data.go.kr/openapi/child-prtc-zn-std',
    data: data,
    dataType: 'jsonp',
    success: function(data){
         console.log(data);
    }
});