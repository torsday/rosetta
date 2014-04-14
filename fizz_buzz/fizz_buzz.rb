def fizz(n)
  (0 == n % 3) && (0 != n % 5)
end

def buzz(n)
  (0 != n % 3) && (0 == n % 5)
end

def fizz_buzz(n)
  (0 == n % 3) && (0 == n % 5)
end

(1..100).each do |i|
  if fizz(i)
    puts "#{i}: Fizz!"
  elsif buzz(i)
    puts "#{i}: Buzz!"
  elsif fizz_buzz(i)
    puts "#{i}: FizzBuzz!"
  else
    puts "#{i}"
  end
end
