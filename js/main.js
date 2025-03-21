


document.addEventListener('DOMContentLoaded', function () {
    var chart = window.chart = new EasyPieChart(document.querySelector('.chart1'), {
        easing: 'easeOutElastic',
        delay: 3000,
        barColor: '#E66363',
        trackColor: '#F9B9B9',
        scaleColor: false,
        lineWidth: 10,
        trackWidth: 10,
        lineCap: 'butt',
        onStep: function (from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });

    document.querySelector('.js_update').addEventListener('click', function (e) {
        chart.update(Math.random() * 200 - 100);
    });

    // chat2
    var chart2 = window.chart = new EasyPieChart(document.querySelector('.chart2'), {
        easing: 'easeOutElastic',
        delay: 3000,
        barColor: '#FFBD4A',
        trackColor: '#FFE6BA',
        scaleColor: false,
        lineWidth: 10,
        trackWidth: 10,
        lineCap: 'butt',
        onStep: function (from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });

    document.querySelector('.js_update2').addEventListener('click', function (e) {
        chart2.update(Math.random() * 200 - 100);
    });

});


// big chart
const ctx = document.getElementById('myChart');
const datastore = {

    datasets: [{
        label: 'In-Store Sales',
        data: [150, 100, 100],
        backgroundColor: [
            '#5B69BC',
            '#FF8ACC',
            '#35B8E0'
        ],
        borderColor: '#ddd0',
        hoverBorderColor: [
            '#5B69BC',
            '#FF8ACC',
            '#35B8E0'
        ],
        hoverBorderWidth: 4,
        hoverOffset: 2,
    }]
};


new Chart(ctx, {
    type: 'doughnut',
    data: datastore,
    options: {
        layout: {
            padding: 10
        },
        responsive: true,
    }
});


// big chart2

// order-table start

$(document).ready(function () {

    new DataTable('#order-table');


    $('#sidebar li ul').hide();

    $("#sidebar li").click(function () {
        // $("#sidebar li ul").slideToggle('500');  sub #sidebar li ul ak somoy akj krbe
        $(this).children("#sidebar li ul").slideToggle('500'); // this - at a time setake click krbo seta kaj krbe

        $(this).find(".fas").toggleClass('fa-caret-up fa-caret-down');

    });

    // $(this).parent('#sidebar li').children('#sidebar li ul').slideToggle('500');


    $("#sidebar li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });




    $(".sidebarCollapse").click(function () {
        $(".left-side-menu").toggleClass('hide');
        $(".content-wrapper ").toggleClass('hide');

        $(this).children().toggleClass('fa-bars fa-close');
    });


    // $(this).addClass("active").siblings().removeClass("active");

    let cartDropdown = document.querySelector('.cart-dropdown');
    let profileDropdown = document.querySelector('.profile-dropdown');
    let navForm = document.querySelector('.nav-form');

    window.onscroll = () => {
        cartDropdown.classList.remove('showCart');
        profileDropdown.classList.remove('showProfile');
        navForm.classList.remove('showSearch');
    };





    var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null, // optional scroll container selector, otherwise use window,
            resetAnimation: true, // reset animation on end (default is true)
        }
    );
    wow.init();

    // $('[data-bs-toggle="tooltip"]').tooltip();

    // var tol = document.getElementById('tol');
    // var tooltip = new bootstrap.Tooltip(tol);

    // var tol2 = document.getElementById('tol2');
    // var tooltip2 = new bootstrap.Tooltip(tol2);


});


window.onload = function () {
    // chartitem3
    var dataPoints = [];

    var chartitem3 = new CanvasJS.Chart("chartitem3", {
        backgroundColor: "#f7f7f700",
        title: {
            text: "Live sajib"
        },
        data: [{
            type: "line",
            lineColor: "orange", //**Change the color here
            markerColor: "#fff",
            dataPoints: dataPoints
        }]
    });
    updateData();

    // Initial Values
    var xValue = 0;
    var yValue = 10;
    var newDataCount = 6;

    function addData(data) {
        if (newDataCount != 1) {
            $.each(data, function (key, value) {
                dataPoints.push({ x: value[0], y: parseInt(value[1]) });
                xValue++;
                yValue = parseInt(value[1]);
            });
        } else {
            //dataPoints.shift();
            dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]) });
            xValue++;
            yValue = parseInt(data[0][1]);
        }

        newDataCount = 1;
        chartitem3.render();
        setTimeout(updateData, 1500);
    }

    function updateData() {
        $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + xValue + "&ystart=" + yValue + "&length=" + newDataCount + "type=json", addData);
    }


    // chartitem3
    var chart = new CanvasJS.Chart("chartitem2", {
        title: {
            text: "Temperature of Each Boiler"
        },
        backgroundColor: "#f7f7f700",
        axisY: {
            title: "Temperature (°C)",
            includeZero: true,
            suffix: " °C"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,### °C",
            indexLabel: "{y}",
            dataPoints: [
                { label: "boiler1", y: 206 },
                { label: "boiler2", y: 163 },
                { label: "boiler3", y: 154 },
                { label: "boiler4", y: 176 },
                { label: "boiler5", y: 184 },
                { label: "boiler6", y: 122 }
            ]
        }]
    });

    function updateChart() {
        var boilerColor, deltaY, yVal;
        var dps = chart.options.data[0].dataPoints;
        for (var i = 0; i < dps.length; i++) {
            deltaY = Math.round(2 + Math.random() * (-2 - 2));
            yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
            boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
            dps[i] = { label: "Boiler " + (i + 1), y: yVal, color: boilerColor };
        }
        chart.options.data[0].dataPoints = dps;
        chart.render();
    };
    updateChart();

    setInterval(function () { updateChart() }, 500);


};
