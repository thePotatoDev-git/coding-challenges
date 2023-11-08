-- Challenge 2 (SQL)

SELECT name, -- Get entries by name
    SUM(CASE WHEN money > 0 -- If value is > 0
        THEN money -- Then add that value
        ELSE 0 -- Else add 0
        END) AS sum_of_deposits, -- Put sum into sum_of_deposits column
    SUM(CASE WHEN money < 0 -- If value is < 0
        THEN ABS(money) -- Add the absolute value
        ELSE 0 -- Else add 0
        END) AS sum_of_withdrawals -- Put sum of values into sum_of_withdrawals
FROM transfers -- From transfers table
GROUP BY name
ORDER BY name;