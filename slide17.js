




                    function methodize(func) {
                      return function (y) {
                        return func(this, y);
                      };
                    }
                    function methodize(func) {
                      return function (...y) {
                        return func(this, ...y);
                     };
                    }
