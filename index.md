# Caleb Yu's Submission

## Question 1:
Data Visuals: Display or graph 3 metrics or trends from the data set that are interesting to you.

**Figure 1** displays the amount of time (in minutes) from when the San Francisco Fire Department received a call for help to when the units arrived on the scene per zip code.  When examining the average time to get to a destination, a simple average may be misleading.  As displayed by this graph, there are two noticeable outliers in the data.  In zip code 94105, it took over 6 hours for the fire department to respond to one particular incident.  Similarly, it took almost 13 hours for the fire department to respond to an incident in zip code 94127.  The areas where the line is darker mean that multiple units were dispatched to that area.  Thus, a few outliers can massively change the average.
![Figure 1](https://github.com/Cable-2-5/Internship-Projects/blob/master/images/Figure%201.png)

**Figure 2** examines the relationship between zip code, the number of emergencies (numbers on the map), and the average amount of units deployed to each emergency in that zip code.  On average, 2.15 units are deployed per emergency.  Three of the four zip codes with the smallest amount of emergencies have above the average number of units deployed to these areas.  Zip code 91427 is an extreme abnormality with roughly 10.4 units being deployed per emergency.  However, this is likely due to the extreme outlier where a particular incident required 40 units to be dispatched to a single location.  Nevertheless, this data could be suggesting that an abnormally high number of units are being sent to areas of few emergencies, which ultimately may point to inefficiencies in the San Francisco Fire Department system.
![Figure 2](https://cable-2-5.github.io/images/Figure%202.png)

**Figure 3** examines the type of emergencies, the number of incidents (number above each bar), and the average number of units deployed to a particular emergency.  The graph reveals that train/rail incidents, water rescues, and structure fires require more vehicle dispatches per incident than other incidents.  It also shows that medical incidents are the most common kind of emergency with 6791 of the 10,000 different cases being medical incidents.  One kind of incident is both common and requires many units.  Structure fires are the 3rd most common kind of emergency and require roughly 5.5 units per emergency.  
![Figure 3](https://github.com/Cable-2-5/Internship-Projects/blob/master/images/Figure%203.png)


## Question 3
Which areas take the longest time to dispatch to on average? How can this be reduced?

The zip codes which take the longest time to dispatch to on average are 94105 and 94127.  These zip codes have average times of 19 and 45.3 minutes respectively.  The zip codes which take the longest time to arrive on scene from the initial call are 94127, 94105, and 94129.  The average times to arrive on the scene are 45.3, 19.0, and 15.6 minutes respectively.
Notably, both zip codes 94105 and 94127 have major outliers in the data (see Figure 3).  For zip code 94127, much of the delay occurred between entry and dispatch (29.6 minutes).  Thus, the time to arrive on scene may be reduced by finding ways to speed the time between entry and dispatch.  Similarly, emergencies occurring in zip code 94105 have delays between receiving calls and entering data.  Time can be reduced by thoroughly examining the process of receiving a call to entering data into the system in zip code 94127.
The zip codes which takes the longest time from dispatch to arrive on the scene are 94127 and 94129 which take 11.3 and 11.1 minutes respectively.  There are not many emergencies in these areas, so it is possible that it is merely the result of a few outliers, but it could also be partially due to the layout of the roads in these areas.  Most of the roads in these areas are curved in contrast to many of the completely straight roads in other areas of the city. 

