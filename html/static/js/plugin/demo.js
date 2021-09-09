google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'X', 'Y', 'Temperature'],
        ['', 80, 167, 120],
        ['', 79, 136, 130],
        ['', 78, 184, 50],
        ['', 72, 278, 230],
        ['', 81, 200, 210],
        ['', 72, 170, 100],
        ['', 68, 477, 80]
    ]);

    var options = {
        colorAxis: { colors: ['yellow', 'red'] }
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month', 'CO', 'CO2', 'Average'],
        ['2004/05', 165, 938, 614.6],
        ['2005/06', 135, 1120, 682],
        ['2006/07', 157, 1167, 623],
        ['2007/08', 139, 1110, 609.4],
        ['2008/09', 136, 691, 569.6]
    ]);

    var options = {
        title: 'Monthly Gas Levels',
        vAxis: { title: 'PPM' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Hours', 'PPM'],
        ['5', 3432],
        ['6', 234],
        ['7', 324],
        ['8', 123],
        ['9', 123],
        ['10', 400],
        ['11', 460],
        ['12', 1120],
        ['13', 540]
    ]);

    var options = {
        title: 'Gas CO',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('sensor1'));

    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['Hours', 'PPM'],
        ['5', 124],
        ['6', 54],
        ['7', 234],
        ['8', 1245],
        ['9', 325],
        ['10', 1030],
        ['11', 660],
        ['12', 1170],
        ['13', 1000]
    ]);

    var options = {
        title: 'Gas CO2',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('sensor2'));

    chart.draw(data, options);
}