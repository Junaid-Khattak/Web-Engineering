var calendar = {

  init: function() {

    var mon = 'Monday';
    var tue = 'Tuesday';
    var wed = 'Wednesday';
    var thur = 'Thursday';
    var fri = 'Friday';
    var sat = 'Saturday';
    var sund = 'Sunday';
	
    var d = new Date();;
    var cur_Year = d.getFullYear();
	
	var start_Date = cur_Year + "/" + (d.getMonth() + 1) + "/" + d.getDate();

    var cur_Month = d.getMonth() + 1;

    function GetMonthName(cur_Month) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[cur_Month - 1];
    }
	

    setMonth(cur_Month, mon, tue, wed, thur, fri, sat, sund);

    function setMonth(cur_Month, mon, tue, wed, thur, fri, sat, sund) {
      $('.month').text(GetMonthName(cur_Month) + ' ' + cur_Year);
      $('.month').attr('data-month', cur_Month);
      day_Date(cur_Month, mon, tue, wed, thur, fri, sat, sund);
    }

    $('.btn-next').on('click', function(e) {
      var cur_Month = $('.month').attr('data-month');
      if (cur_Month > 11) {
        $('.month').attr('data-month', '0');
        var cur_Month = $('.month').attr('data-month');
        cur_Year = cur_Year + 1;
        setMonth(parseInt(cur_Month) + 1, mon, tue, wed, thur, fri, sat, sund);
      } else {
        setMonth(parseInt(cur_Month) + 1, mon, tue, wed, thur, fri, sat, sund);
      };
    });

    $('.btn-prev').on('click', function(e) {
      var cur_Month = $('.month').attr('data-month');
      if (cur_Month < 2) {
        $('.month').attr('data-month', '13');
        var cur_Month = $('.month').attr('data-month');
        cur_Year = cur_Year - 1;
        setMonth(parseInt(cur_Month) - 1, mon, tue, wed, thur, fri, sat, sund);
      } else {
        setMonth(parseInt(cur_Month) - 1, mon, tue, wed, thur, fri, sat, sund);
      };
    });



    function day_Date(cur_Month, mon, tue, wed, thur, fri, sat, sund) {

      $($('tbody.event-calendar tr')).each(function(index) {
        $(this).empty();
      });

      $($('thead.event-days tr')).each(function(index) {
        $(this).empty();
      });

      function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return days;
      }

      i = 0;

      setDaysInOrder(mon, tue, wed, thur, fri, sat, sund);

      function setDaysInOrder(mon, tue, wed, thur, fri, sat, sund) {
        var monthDay = getDaysInMonth(cur_Month - 1, cur_Year)[0].toString().substring(0, 3);
        if (monthDay === 'Mon') {
          $('thead.event-days tr').append('<td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td>');
        } else if (monthDay === 'Tue') {
          $('thead.event-days tr').append('<td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td>');
        } else if (monthDay === 'Wed') {
          $('thead.event-days tr').append('<td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td>');
        } else if (monthDay === 'Thu') {
          $('thead.event-days tr').append('<td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td>');
        } else if (monthDay === 'Fri') {
          $('thead.event-days tr').append('<td>' + fri + '</td><td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td>');
        } else if (monthDay === 'Sat') {
          $('thead.event-days tr').append('<td>' + sat + '</td><td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td>');
        } else if (monthDay === 'Sun') {
          $('thead.event-days tr').append('<td>' + sund + '</td><td>' + mon + '</td><td>' + tue + '</td><td>' + wed + '</td><td>' + thur + '</td><td>' + fri + '</td><td>' + sat + '</td>');
        }
      };
      $(getDaysInMonth(cur_Month - 1, cur_Year)).each(function(index) {
        var index = index + 1;
        if (index < 8) {
          $('tbody.event-calendar tr.1').append('<td date-month="' + cur_Month + '" date-day="' + index + '" date-year="' + cur_Year + '">' + index + '</td>');
        } else if (index < 15) {
          $('tbody.event-calendar tr.2').append('<td date-month="' + cur_Month + '" date-day="' + index + '" date-year="' + cur_Year + '">' + index + '</td>');
        } else if (index < 22) {
          $('tbody.event-calendar tr.3').append('<td date-month="' + cur_Month + '" date-day="' + index + '" date-year="' + cur_Year + '">' + index + '</td>');
        } else if (index < 29) {
          $('tbody.event-calendar tr.4').append('<td date-month="' + cur_Month + '" date-day="' + index + '" date-year="' + cur_Year + '">' + index + '</td>');
        } else if (index < 32) {
          $('tbody.event-calendar tr.5').append('<td date-month="' + cur_Month + '" date-day="' + index + '" date-year="' + cur_Year + '">' + index + '</td>');
        }
        i++;
      });
      var date = new Date();
      var month = date.getMonth() + 1;
      var thisyear = new Date().getFullYear();
      setCurrentDay(month, thisyear);
    }

    /**
     * Get current day and set as '.current-day'
     */
    function setCurrentDay(month, year) {
      var viewMonth = $('.month').attr('data-month');
      var eventYear = $('.event-days').attr('date-year');
      if (parseInt(year) === cur_Year) {
        if (parseInt(month) === parseInt(viewMonth)) {
          $('tbody.event-calendar td[date-day="' + d.getDate() + '"]').addClass('current-day');
        }
      }
    };
  },
};

$(document).ready(function() {
  calendar.init();
});