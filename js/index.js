'use strict'

// Boolean(Number('10')) + 1) boolean превращает number в true(1) или false(0) поэтому будет 2
// 'sub' + Number(false) number(false) дает 0, a 'sub' это string поэтому будет sub0
// 16 * '91' при умножение string '91' становится number и поэтому получается 1456
// true-70 true это 1, поэтому 1-70 будет -69
// Номер(1 + String(1)) + 1 выдает ошибку