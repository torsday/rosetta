# In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
#
# 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
# It is possible to make £2 in the following way:
#
# 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
# How many different ways can £2 be made using any number of coins?

#... How many different combinations of 1,2,5,10,20,50,100,200 can make 200?

def coin_sums
  # coins = [1,2,5,10,20,50,100,200]
  count = 0
  for one in 0..(200 / 1)
    next if (1 * one) > 200
    for two in 0..(200 / 2)
      next if (1 * one) + (2 * two) > 200
      for five in 0..(200 / 5)
        next if (1 * one) + (2 * two) + (5 * five) > 200
        for ten in 0..(200 / 10)
          next if (1 * one) + (2 * two) + (5 * five) + (10 * ten) > 200
          for twenty in 0..(200 / 20)
            next if (1 * one) + (2 * two) + (5 * five) + (10 * ten) + (20 * twenty) > 200
            for fifty in 0..(200 / 50)
              next if (1 * one) + (2 * two) + (5 * five) + (10 * ten) + (20 * twenty) + (50 * fifty) > 200
              for hundred in 0..(200 / 100)
                next if (1 * one) + (2 * two) + (5 * five) + (10 * ten) + (20 * twenty) + (50 * fifty) + (100 * hundred) > 200
                for two_hundred in 0..(200 / 200)
                  total = (1 * one) + (2 * two) + (5 * five) + (10 * ten) + (20 * twenty) + (50 * fifty) + (100 * hundred) + (200 * two_hundred)
                  next if total > 200
                  if total == 200
                    count += 1
                  end
                end
              end
            end
          end
        end
      end
    end
    puts "#{one} out of 200"
  end
  puts count
end
