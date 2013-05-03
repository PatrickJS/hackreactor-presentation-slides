





                    function applyf(binary) {
                      return function (x) {
                        return function (y) {
                          return binary(x, y);
                        };
                      };
                    }
