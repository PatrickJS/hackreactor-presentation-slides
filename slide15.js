





                    function curry(func, first) {
                      return function (second) {
                        return func(first, second);
                      };
                    }
