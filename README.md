# Random User Data Visualizer

<p> Live Site Here: https://random-user-visualizer.herokuapp.com/#/ </p>

### Front-End

![Alt Text](https://github.com/sukhdipsrai/mediahost/blob/6816972497a2dd8fcf090c0e577b7f0a73651528/nc-demo.gif)

#### Find Data To Use Here
<p>
Source: (https://randomuser.me/api/?)<br>
Documentation: (https://randomuser.me/documentation)
</p>

### Back-End API Usage

#### File Options
 The API returns JSON by default.<br><br> 
 You can specifiy the ```Accept``` header for <br>
```application/json``` for JSON output , or ```text/plain``` for plain/text output , or either```text/xml```  or ```application/xml``` for XML output.

#### Return Data
##### JSON
```
{
    "results": {
        "female": 45.5,
        "firstName": {
            "a-m": 68.5
        },
        "lastName": {
            "a-m": 64
        },
        "topStatesTotal": [{
            "_name": "state",
                "_content": {
                    "name": "Nebraska",
                    "rank": 3,
                    "female": 50,
                    "male": 50,
                    "total": 3
                }},{},...],
        "topStatesFemale": [{},{},...],
         "topStatesMale": [{},{},...],
         "age":[ {
                "_name": "ageGroup",
                "_content": {
                    "group": "0-20",
                    "percent": 0
                }
            },,{},...],
         "total":200}
}
```
```results["female"]```: Percentage of Female Users vs Male out of the whole data set.<br>
```results["firstName"]["a-m"]```: Statistics about the first name. For example, how many users name begins with the letter ```a-m```  vs. ```n-z```.<br>
```results["topStatesTotal"]```: Up to 10 states, who have the highest population with rank and gender statistics about them.<br>
```results["topStatesTotal"]```: Up to 10 states, who have the highest female population with rank and gender statistics about them.<br>
```results["topStatesTotal"]```: Up to 10 states, who have the highest male population with rank and gender statistics about them.<br>
```results["age"]```: Count of users that fall into different age groups, 0-20, 21-40, 41-60, 61-80, 81-100, 100+
##### Plain Text
```
Percentage female versus male: 45.5%
Percentage of first names that start with A-M versus N-Z: 68.5%
Percentage of last names that start with A-M versus N-Z: 64%
Washington rank in total population is: 1, with a total population percentage of: 5%, with a state percentage of female versus male: 40%
....
The percentage of people in age range 100+ : 0%
The total amount of people is: 200
```

##### XML
```
<results>
	<female>45.5</female>
	<firstName>
		<a-m>68.5</a-m>
	</firstName>
	<lastName>
		<a-m>64</a-m>
	</lastName>
	<topStatesTotal>
		<state>
			<name>Washington</name>
			<rank>1</rank>
			<female>40</female>
			<male>60</male>
			<total>5</total>
		</state>
	</topStatesTotal>
	<topStatesFemale>
		<state>...</state>
	</topStatesFemale>
	<topStatesMale>
		<state>...</state>
	</topStatesMale>
	<age>
		<ageGroup>
			<group>0-20</group>
			<percent>0</percent>
		</ageGroup>
	</age>
	<total>200</total>
</results>
```
#### (Example) cURL
```
curl --location --request POST 'https://random-user-visualizer.herokuapp.com/api/randomUser' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data-raw { "results":[{...}], "info":{...} }
```

#### (Example) Node.Js - Axios
```
var axios = require('axios');
var data = JSON.stringify({
  "results":[{...}],
  "info":{...}
  });

var config = {
  method: 'post',
  url: 'https://random-user-visualizer.herokuapp.com/api/randomUser',
  headers: { 
    'Accept': 'text/plain', 
    'Content-Type': 'application/json'
  },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```
