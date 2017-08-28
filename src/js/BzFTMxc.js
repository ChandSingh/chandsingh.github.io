 // BzFTMxc.js


(function(_W, _D){

    var makeSquare = function(elements){
	for (var i = 0; i < elements.length; i ++) {
	    elements[i].setAttribute('height', elements[i].offsetWidth);
	    elements[i].style.height = elements[i].offsetWidth + 'px';
	}
    };

    var renderChart = function(print){
	Highcharts.chart('interests-chart', {

	    chart: {
		type: 'solidgauge',
		height: '220px'
	    },

	    title: {
		text: '',
		floating: true,
		enabled: false
	    },

	    pane: {
		startAngle: 0,
		endAngle: 360,
		background: [{
		    outerRadius: '94%',
		    innerRadius: '80%',
		    backgroundColor: Highcharts.Color('#EEE').setOpacity(0.5)
			.get(),
		    borderWidth: 0
		}, {
		    outerRadius: '79%',
		    innerRadius: '65%',
		    backgroundColor: Highcharts.Color('#EEE').setOpacity(0.5)
			.get(),
		    borderWidth: 0
		}, {
		    outerRadius: '64%',
		    innerRadius: '50%',
		    backgroundColor: Highcharts.Color('#EEE').setOpacity(0.5)
			.get(),
		    borderWidth: 0
		}]
	    },

	    yAxis: {
		min: 0,
		max: 100,
		lineWidth: 0,
		tickPositions: []
	    },

	    plotOptions: {
		solidgauge: {
		    borderWidth: '34px',
		    dataLabels: {
			enabled: false
		    },
		    linecap: 'round',
		    stickyTracking: false
		},
		series: {
		    animation: print ? false : true
		}
	    },
	    
	    credits: {
		enabled: false
	    },

	    tooltip: {
		enabled: false
	    },

	    series: [{
		name: 'Blockchain',
		borderColor: '#333',
		data: [{
		    color: '#333',
		    radius: '94%',
		    innerRadius: '80%',
		    y: 80
		}]
	    }, {
		name: 'Data Engineering',
		borderColor: '#666',
		data: [{
		    color: '#666',
		    radius: '79%',
		    innerRadius: '65%',
		    y: 65
		}]
	    }, {
		name: 'Backend-Devel',
		borderColor: '#999',
		data: [{
		    color: '#999',
		    radius: '64%',
		    innerRadius: '50%',
		    y: 50
		}]
	    }]

	}, function callback(chart) {

	    var getCoordinates = function(_chart, _x, _y){
		var _cW = chart.chartWidth;
		var _cH = chart.chartHeight;
		var _dia = _cW > _cH ? _cH : _cW;
		var _rad = _dia / 2;
		var _cenX = _cW / 2;
		var _cenY = _cH / 2;
		// Calculate coordinates
		var x = _cenX + (parseFloat(_x) / 100 * _rad);
		var y = _cenY + (parseFloat(_y) / 100 * _rad);
		return [x,y];
	    };

	    var _pos1 = getCoordinates(chart, '-70%', '-75.0%');
	    var _pos2 = getCoordinates(chart, '-70%', '-62%');
	    var _pos3 = getCoordinates(chart, '-81.5%', '-51%');

	    var _fontSize = Math.abs(Math.abs(_pos1[1] - _pos2[1]) - 2) + 'px';

	    this.renderer.text('Blockchain')
		.attr({
		    'stroke-width': 1,
		    'zIndex': 10
		})
		.css({
		    'font-size': _fontSize
		})
		.translate(_pos1[0], _pos1[1])
		.add(this.series[0].group);

	    this.renderer.text('Blockchain')
		.attr({
		    'stroke-width': 1,
		    'zIndex': 10
		})
		.css({
		    'font-size': _fontSize
		})
		.translate(_pos2[0], _pos2[1])
		.add(this.series[0].group);

	    this.renderer.text('Development')
		.attr({
		    'stroke-width': 1,
		    'zIndex': 10
		})
		.css({
		    'font-size': _fontSize
		})
		.translate(_pos3[0], _pos3[1])
		.add(this.series[0].group);
	    
	});
    };
    
    _D.addEventListener('DOMContentLoaded', function(e){

	// Make elements square
	var square_elems = _D.getElementsByClassName('square');
	makeSquare(square_elems);

	// Render chart
	renderChart();

	// Add event listener for screen re-size
	_W.addEventListener('resize', function(e){
	    makeSquare(square_elems);
	    renderChart();
	});
	
	// Invoke before printing
	var printing = function(){
	    makeSquare(square_elems);
	    renderChart(true);
	};	
	if (window.matchMedia) {
	    var mediaQueryList = window.matchMedia('print');
	    mediaQueryList.addListener(printing);
	}
	window.onbeforeprint = printing;

    });
    
})(window, window.document);

