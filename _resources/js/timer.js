function CountDownTimer(id, duration, config) {
  // Data members 
  console.log(config);
  this.duration = duration;
  this.useDoubleDigits = config.useDoubleDigits || true;
  this.removeEmptyNumbers = config.removeEmptyNumbers || false;
  this.refreshRate = config.refreshRate || 1000;
  this.running = false;
  this.element = document.getElementById(id);

  // Timer methods

  this.formatDigits = this.useDoubleDigits
            ? (function(number){ return number < 10 ? "0" + number : number; })
            : (function(number){ return number; })

  this.createNumberColumn = function(name, number) {
    var numberString = this.formatDigits(number);
    var column = document.createElement('td');

    // Create number span
    var numberSpan = document.createElement('div');
    numberSpan.textContent = numberString;
    numberSpan.className = 'timer-field-number timer-field-number-' + name;
    column.appendChild(numberSpan);

    // Create text span (for name?)
    var captionSpan = document.createElement('div');
    captionSpan.className = 'timer-field-caption timer-field-caption-' + name;
    column.appendChild(captionSpan);
    
    column.className = 'timer-field';
    return column;
  }

  this.createSeparatorColumn = function() {
    var column = document.createElement('td');
    column.setAttribute('class', 'timer-separator');
    return column;
  }

  this.start = function() {
    if (this.running) {
      return;
    }
    this.running = true;
    var start = Date.now(),
      self = this,// XXX: Can this be moved to inside of timer()?
      secondsLeft, obj;

    (function timer() {
      secondsLeft = self.duration - (((Date.now() - start) / 1000) | 0);

      if (secondsLeft > 0) {
        setTimeout(timer, self.refreshRate);
      } else {
        secondsLeft = 0;
        self.running = false;
      }


      self.element.innerHTML = '';

      var table = document.createElement('table');
        var tbody = document.createElement('tbody');
      var row = document.createElement('tr');

      var addedField = false;
      var fieldStats = [
        { name: 'days',    number: (secondsLeft / (60*60*24))   | 0, optional: true },
        { name: 'hours',   number: (secondsLeft / (60*60)) % 24 | 0, optional: true },
        { name: 'minutes', number: (secondsLeft / 60) % 60      | 0, optional: true },
        { name: 'seconds', number: (secondsLeft % 60)           | 0, optional: false},
      ];
      fieldStats.forEach(function(field) {
        if(self.removeEmptyNumbers && field.number === 0 && field.optional === true && !addedField) {
          return null;
        }
        var column = self.createNumberColumn(field.name, field.number);
        if(column !== null) {
          if(addedField) {
            row.appendChild(self.createSeparatorColumn())
          }
          row.appendChild(column);
          addedField = true;
        }
      });

      tbody.appendChild(row);
      table.appendChild(tbody);
      table.setAttribute("class", "timer");
      self.element.appendChild(table);
    }());
  };
};

function CountUntilTimer(id, date, config) {
  this.base = CountDownTimer;
  CountDownTimer.call(this, id, (date - Date.now()) / 1000, config)// OPT: How to make this look saner?
}