import React from "react";
import "../stylesheets/homepage.css";
import axios from "axios";
var sampleData = require("../input.json");

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: false, stats: null };
  }

  switchInput = function () {
    this.setState({ text: !this.state.text });
  };

  clearErrors = function () {
    this.setState({ errors: "", jsonErrors: "", textErrors: "" });
  };

  visualize = function (e) {
    console.log("visualize");
    this.clearErrors();
    let data = null;

    if (!this.state.text) {
      // Use Text Input
      try {
        let data = document.getElementsByClassName("json-text-input")[0].value;
        let body = JSON.stringify({
          results: [
            {
              gender: "female",
              name: {
                title: "Mrs",
                first: "April",
                last: "Walters",
              },
              location: {
                street: {
                  number: 8898,
                  name: "Northaven Rd",
                },
                city: "Seattle",
                state: "Mississippi",
                country: "United States",
                postcode: 26219,
                coordinates: {
                  latitude: "-31.4180",
                  longitude: "101.0682",
                },
                timezone: {
                  offset: "+5:30",
                  description: "Bombay, Calcutta, Madras, New Delhi",
                },
              },
              email: "april.walters@example.com",
              login: {
                uuid: "1eabe8d7-25a9-4a87-a6c0-1dd2a56b837c",
                username: "angrycat841",
                password: "rodney",
                salt: "tPKPFDky",
                md5: "45b4dff7ab03c4a5cb14109a918d8428",
                sha1: "a30dc93af6f44c04739c75ac16318761a0f0434e",
                sha256:
                  "82888a16bb7fc6c39bf7ed3a397ac176b661d8416bff701d95e0f5534e10d1d3",
              },
              dob: {
                date: "1989-03-19T06:30:55.988Z",
                age: 32,
              },
              registered: {
                date: "2005-02-04T01:32:56.943Z",
                age: 16,
              },
              phone: "(347)-514-7078",
              cell: "(048)-018-7824",
              id: {
                name: "SSN",
                value: "767-91-6065",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/65.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/65.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Brandon",
                last: "Carr",
              },
              location: {
                street: {
                  number: 4060,
                  name: "Valley View Ln",
                },
                city: "St. Louis",
                state: "Texas",
                country: "United States",
                postcode: 77509,
                coordinates: {
                  latitude: "-80.3444",
                  longitude: "87.5603",
                },
                timezone: {
                  offset: "-7:00",
                  description: "Mountain Time (US & Canada)",
                },
              },
              email: "brandon.carr@example.com",
              login: {
                uuid: "d16e02dc-d37b-4acf-990a-8721226dddc1",
                username: "smallzebra653",
                password: "hover",
                salt: "gKcPa6s8",
                md5: "16b3df3c6d198def1e11dc98986c7f57",
                sha1: "dc7100a829495795145fc920f7155df4eb7869d5",
                sha256:
                  "3c317e80c92bf65bb37d209df7f4d26d5ced8b617128a08523a2770dc708d70d",
              },
              dob: {
                date: "1952-01-06T01:17:33.543Z",
                age: 69,
              },
              registered: {
                date: "2015-10-22T13:05:04.966Z",
                age: 6,
              },
              phone: "(642)-939-2505",
              cell: "(040)-916-3526",
              id: {
                name: "SSN",
                value: "802-74-4864",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/89.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/89.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Alexander",
                last: "May",
              },
              location: {
                street: {
                  number: 506,
                  name: "E North St",
                },
                city: "San Francisco",
                state: "Maryland",
                country: "United States",
                postcode: 49897,
                coordinates: {
                  latitude: "15.6580",
                  longitude: "-165.0860",
                },
                timezone: {
                  offset: "+6:00",
                  description: "Almaty, Dhaka, Colombo",
                },
              },
              email: "alexander.may@example.com",
              login: {
                uuid: "a0e4f7cf-92ce-4b73-b5e4-818161e29594",
                username: "silverbutterfly360",
                password: "chicks",
                salt: "kNplfwlI",
                md5: "fbbcf3f75db4e58c0ebaba6c39b956f3",
                sha1: "27319ee7dfdddfc0e4201dc8bea61777bbebf77c",
                sha256:
                  "9d2dfb9b6a292dd6e8e70d089c73b57199fb6ce021d0e21169045f48447b9907",
              },
              dob: {
                date: "1946-04-13T18:16:47.139Z",
                age: 75,
              },
              registered: {
                date: "2013-11-22T18:01:19.240Z",
                age: 8,
              },
              phone: "(024)-166-1904",
              cell: "(697)-505-3862",
              id: {
                name: "SSN",
                value: "663-25-8883",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/26.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/26.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/26.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Miss",
                first: "Marsha",
                last: "Silva",
              },
              location: {
                street: {
                  number: 6265,
                  name: "Elgin St",
                },
                city: "Denton",
                state: "Nevada",
                country: "United States",
                postcode: 72646,
                coordinates: {
                  latitude: "31.1081",
                  longitude: "135.7694",
                },
                timezone: {
                  offset: "+4:30",
                  description: "Kabul",
                },
              },
              email: "marsha.silva@example.com",
              login: {
                uuid: "13c66ea6-1109-4c03-8672-a3315293b140",
                username: "silverwolf140",
                password: "motor",
                salt: "cFZIOAtT",
                md5: "4b854c09bf4509f3deea15e8e352accb",
                sha1: "5915eea5820bdcf146b9f88854f676e0a1835f25",
                sha256:
                  "bea2019b3fa046cb5454beb7ca95928e6fff41d064298a6e98e1cc3840c19a58",
              },
              dob: {
                date: "1985-05-28T07:34:54.883Z",
                age: 36,
              },
              registered: {
                date: "2003-01-30T08:03:08.437Z",
                age: 18,
              },
              phone: "(888)-229-7432",
              cell: "(587)-045-5914",
              id: {
                name: "SSN",
                value: "457-34-8372",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/86.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/86.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Mrs",
                first: "Beth",
                last: "Stephens",
              },
              location: {
                street: {
                  number: 5679,
                  name: "Prospect Rd",
                },
                city: "Abilene",
                state: "Wyoming",
                country: "United States",
                postcode: 40297,
                coordinates: {
                  latitude: "29.9829",
                  longitude: "-85.5679",
                },
                timezone: {
                  offset: "0:00",
                  description:
                    "Western Europe Time, London, Lisbon, Casablanca",
                },
              },
              email: "beth.stephens@example.com",
              login: {
                uuid: "0472a92e-069f-4b81-95ea-3aa649cde5b8",
                username: "redcat517",
                password: "&amp",
                salt: "LoBWnTRl",
                md5: "9b6306ba9c461557b39d3184d420c80b",
                sha1: "73c432c33d94a2824c595c6b054c855f73572e83",
                sha256:
                  "ac743bd62157e8521cb612bb198e73d4871357322ed7ed622fb6dbc696d305ed",
              },
              dob: {
                date: "1994-03-20T02:31:31.122Z",
                age: 27,
              },
              registered: {
                date: "2017-09-19T08:44:13.884Z",
                age: 4,
              },
              phone: "(277)-796-0129",
              cell: "(104)-850-9712",
              id: {
                name: "SSN",
                value: "804-34-6255",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/8.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/8.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Mrs",
                first: "Mattie",
                last: "Payne",
              },
              location: {
                street: {
                  number: 1228,
                  name: "E North St",
                },
                city: "San Francisco",
                state: "Mississippi",
                country: "United States",
                postcode: 68079,
                coordinates: {
                  latitude: "28.8672",
                  longitude: "118.6019",
                },
                timezone: {
                  offset: "+9:30",
                  description: "Adelaide, Darwin",
                },
              },
              email: "mattie.payne@example.com",
              login: {
                uuid: "1aa438b0-8d8a-464b-9cf0-c0edce43eb75",
                username: "ticklishleopard490",
                password: "buffy",
                salt: "BZo6S81u",
                md5: "750e15bff18b9009f8c8e6eee7babfe6",
                sha1: "efacf4468a6a707ec188ef0ea539e0ff403f670c",
                sha256:
                  "d277b3a04f7af70a7deed8c8d0c6ad1d7f7af6021f58352db780a84ecbd183b5",
              },
              dob: {
                date: "1979-08-06T03:20:59.656Z",
                age: 42,
              },
              registered: {
                date: "2008-09-28T01:44:14.101Z",
                age: 13,
              },
              phone: "(323)-470-9578",
              cell: "(288)-477-7950",
              id: {
                name: "SSN",
                value: "264-76-9480",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/84.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/84.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Miss",
                first: "Lydia",
                last: "Austin",
              },
              location: {
                street: {
                  number: 8805,
                  name: "Wycliff Ave",
                },
                city: "Lousville",
                state: "Louisiana",
                country: "United States",
                postcode: 17163,
                coordinates: {
                  latitude: "-41.8167",
                  longitude: "5.3289",
                },
                timezone: {
                  offset: "-2:00",
                  description: "Mid-Atlantic",
                },
              },
              email: "lydia.austin@example.com",
              login: {
                uuid: "dc1788e2-779c-467d-9c3f-d1da79a0f593",
                username: "tinyostrich870",
                password: "options",
                salt: "9bxyVd7C",
                md5: "8656bf39b4b1911ec308723812e5fe5b",
                sha1: "78f8f74160005643216b0814b355200d54b4eee5",
                sha256:
                  "45a25494e7ebb045c2ec0366c3c657bf84e4adb93b9405f72df6d757078da7bb",
              },
              dob: {
                date: "1973-07-09T08:37:56.596Z",
                age: 48,
              },
              registered: {
                date: "2012-06-15T20:03:16.669Z",
                age: 9,
              },
              phone: "(162)-076-5715",
              cell: "(358)-712-9241",
              id: {
                name: "SSN",
                value: "213-11-1561",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/14.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/14.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Max",
                last: "Howard",
              },
              location: {
                street: {
                  number: 6466,
                  name: "Photinia Ave",
                },
                city: "Buffalo",
                state: "North Carolina",
                country: "United States",
                postcode: 78821,
                coordinates: {
                  latitude: "-8.7908",
                  longitude: "98.7739",
                },
                timezone: {
                  offset: "+1:00",
                  description: "Brussels, Copenhagen, Madrid, Paris",
                },
              },
              email: "max.howard@example.com",
              login: {
                uuid: "3bb30a27-ee14-4bbc-ba03-3f216d90ec23",
                username: "happylion624",
                password: "stryker",
                salt: "5ubGR5uF",
                md5: "82f935be207881f9d14b896352ec7586",
                sha1: "3cca70a26365149340786abe928da524b8042525",
                sha256:
                  "2402547ebc1ebe1b487b7498ec84c4ad61aadfed8db9917177399432808ddce7",
              },
              dob: {
                date: "1987-01-03T01:18:55.236Z",
                age: 34,
              },
              registered: {
                date: "2010-07-31T18:15:09.050Z",
                age: 11,
              },
              phone: "(511)-979-0310",
              cell: "(102)-826-4202",
              id: {
                name: "SSN",
                value: "895-05-9568",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/34.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/34.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Tony",
                last: "Lewis",
              },
              location: {
                street: {
                  number: 3330,
                  name: "Lakeshore Rd",
                },
                city: "Broken Arrow",
                state: "Georgia",
                country: "United States",
                postcode: 92790,
                coordinates: {
                  latitude: "66.7190",
                  longitude: "-175.5071",
                },
                timezone: {
                  offset: "-12:00",
                  description: "Eniwetok, Kwajalein",
                },
              },
              email: "tony.lewis@example.com",
              login: {
                uuid: "747a4992-daa5-4e13-87a7-d3ebfd52d86a",
                username: "redpeacock190",
                password: "crazy1",
                salt: "IpMP2Wrk",
                md5: "86b9101b23f47de4bbd966bd5bf6dfaa",
                sha1: "1e59d0411deafd793509b7921268c083db864d91",
                sha256:
                  "a2e5e1b66009ea058c4494cb0d1dd3bf7d22592f448d9273b52e7ac7daa77874",
              },
              dob: {
                date: "1972-10-19T06:23:09.269Z",
                age: 49,
              },
              registered: {
                date: "2011-05-19T02:47:34.313Z",
                age: 10,
              },
              phone: "(520)-937-1448",
              cell: "(728)-264-3126",
              id: {
                name: "SSN",
                value: "553-57-9925",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/75.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/75.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Rene",
                last: "Hale",
              },
              location: {
                street: {
                  number: 903,
                  name: "Locust Rd",
                },
                city: "Pueblo",
                state: "Arkansas",
                country: "United States",
                postcode: 20177,
                coordinates: {
                  latitude: "-22.9584",
                  longitude: "134.8214",
                },
                timezone: {
                  offset: "+4:30",
                  description: "Kabul",
                },
              },
              email: "rene.hale@example.com",
              login: {
                uuid: "5357b0f8-be3d-4d7b-8ce8-13a7caf7d018",
                username: "organicfrog647",
                password: "pacino",
                salt: "QavuUstq",
                md5: "88b67d0ef6bcd0e253807f060cd4f997",
                sha1: "0134ffcaf73486696ab64d0f1c254e95bc4e1044",
                sha256:
                  "9addae744033ce681bb1130bf1961928c5d7dad1f6ee15d9084983ec4040bbfe",
              },
              dob: {
                date: "1951-02-08T02:42:16.648Z",
                age: 70,
              },
              registered: {
                date: "2011-09-21T16:40:02.720Z",
                age: 10,
              },
              phone: "(973)-504-4851",
              cell: "(512)-493-1830",
              id: {
                name: "SSN",
                value: "953-46-2233",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/32.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/32.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Wade",
                last: "Scott",
              },
              location: {
                street: {
                  number: 2793,
                  name: "Paddock Way",
                },
                city: "Cincinnati",
                state: "Missouri",
                country: "United States",
                postcode: 17608,
                coordinates: {
                  latitude: "22.1106",
                  longitude: "-170.1103",
                },
                timezone: {
                  offset: "-2:00",
                  description: "Mid-Atlantic",
                },
              },
              email: "wade.scott@example.com",
              login: {
                uuid: "46ef851f-066c-41f7-aead-8922940ca9b2",
                username: "brownbear702",
                password: "what",
                salt: "23R6zlbg",
                md5: "c2ba5cd2616f28fd59626e39805447b6",
                sha1: "ec8793a52fb170db09ac5f55a320f168f137c475",
                sha256:
                  "ea632d6d391087c0f78102c3598304116fb95e1edcdd6e6551b50016ca74ec11",
              },
              dob: {
                date: "1969-03-10T23:18:44.728Z",
                age: 52,
              },
              registered: {
                date: "2014-12-05T00:21:31.360Z",
                age: 7,
              },
              phone: "(412)-351-3526",
              cell: "(107)-025-4080",
              id: {
                name: "SSN",
                value: "156-93-3710",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/93.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/93.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/93.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Jacob",
                last: "Hayes",
              },
              location: {
                street: {
                  number: 9452,
                  name: "E Little York Rd",
                },
                city: "Fairfield",
                state: "Virginia",
                country: "United States",
                postcode: 89207,
                coordinates: {
                  latitude: "7.0228",
                  longitude: "-51.8544",
                },
                timezone: {
                  offset: "-2:00",
                  description: "Mid-Atlantic",
                },
              },
              email: "jacob.hayes@example.com",
              login: {
                uuid: "8db33e37-3426-4123-8a2f-7b67a91ace50",
                username: "purplewolf136",
                password: "paris",
                salt: "ZjjmDexk",
                md5: "753ee04591024f282f1e3b836c547b99",
                sha1: "8ea246b48f58ec06d7325c1d50db89c5c39f8c87",
                sha256:
                  "d26a0b424268d617ca2c566a44cf588f5399b65c9d99ff5ccbe1c4f6022f923b",
              },
              dob: {
                date: "1971-06-02T15:51:34.265Z",
                age: 50,
              },
              registered: {
                date: "2013-10-11T08:35:34.902Z",
                age: 8,
              },
              phone: "(119)-679-8499",
              cell: "(193)-201-0883",
              id: {
                name: "SSN",
                value: "785-15-2369",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/37.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/37.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Shane",
                last: "Crawford",
              },
              location: {
                street: {
                  number: 5021,
                  name: "Spring St",
                },
                city: "Tyler",
                state: "Nebraska",
                country: "United States",
                postcode: 36101,
                coordinates: {
                  latitude: "5.6112",
                  longitude: "70.7027",
                },
                timezone: {
                  offset: "+3:30",
                  description: "Tehran",
                },
              },
              email: "shane.crawford@example.com",
              login: {
                uuid: "e58d699c-7582-41fb-a052-0104d497413d",
                username: "smallfrog649",
                password: "technics",
                salt: "MokzSEj9",
                md5: "04dee9e4ef4b698a7c971bfdafa0bc87",
                sha1: "1525b644b3ff412644cc7de154dce08634c1660b",
                sha256:
                  "1b81b1b741b13573966f79e52767512fa8815867aa34bd6c017d0957a3c2e9d7",
              },
              dob: {
                date: "1966-11-09T05:54:25.703Z",
                age: 55,
              },
              registered: {
                date: "2008-09-05T02:49:40.833Z",
                age: 13,
              },
              phone: "(023)-819-5681",
              cell: "(475)-838-0085",
              id: {
                name: "SSN",
                value: "448-04-6011",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/31.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/31.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Miguel",
                last: "Lopez",
              },
              location: {
                street: {
                  number: 7449,
                  name: "Depaul Dr",
                },
                city: "North Las Vegas",
                state: "Illinois",
                country: "United States",
                postcode: 25897,
                coordinates: {
                  latitude: "84.9918",
                  longitude: "11.7975",
                },
                timezone: {
                  offset: "+9:30",
                  description: "Adelaide, Darwin",
                },
              },
              email: "miguel.lopez@example.com",
              login: {
                uuid: "08e8adf6-e805-4613-a839-adc424ab188c",
                username: "tinyfrog735",
                password: "game",
                salt: "KNwLhhCp",
                md5: "b35b5bce3982876423a5a60e9e06b54a",
                sha1: "ca552a977149ed0ab27b2180d814d9676470f2c8",
                sha256:
                  "927e9704db88e7cfe52702069bbfe9ca2e2ab228a734966676dc0997a84b76d1",
              },
              dob: {
                date: "1984-10-04T09:58:12.101Z",
                age: 37,
              },
              registered: {
                date: "2007-09-25T16:53:39.067Z",
                age: 14,
              },
              phone: "(851)-527-2798",
              cell: "(252)-869-5193",
              id: {
                name: "SSN",
                value: "879-99-6392",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/8.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/8.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Ms",
                first: "Vicki",
                last: "King",
              },
              location: {
                street: {
                  number: 3872,
                  name: "Eason Rd",
                },
                city: "Des Moines",
                state: "New Mexico",
                country: "United States",
                postcode: 73520,
                coordinates: {
                  latitude: "13.9335",
                  longitude: "-77.1200",
                },
                timezone: {
                  offset: "-12:00",
                  description: "Eniwetok, Kwajalein",
                },
              },
              email: "vicki.king@example.com",
              login: {
                uuid: "0f4b276e-b3d4-4974-9399-868cee3812c5",
                username: "orangerabbit840",
                password: "klondike",
                salt: "BSedmyZu",
                md5: "820d5297c27503b2561fa84dd30c7a92",
                sha1: "025812b0f5716cfda894d33f1e980171a235e846",
                sha256:
                  "19b8148eea43c42ae757a234360783dce523c09bfb5f10bbcd086d71019cc0ea",
              },
              dob: {
                date: "1990-10-13T02:41:03.520Z",
                age: 31,
              },
              registered: {
                date: "2010-04-24T20:26:37.409Z",
                age: 11,
              },
              phone: "(111)-695-0843",
              cell: "(823)-094-2613",
              id: {
                name: "SSN",
                value: "611-30-9525",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/82.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/82.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Mrs",
                first: "Judith",
                last: "Stevens",
              },
              location: {
                street: {
                  number: 1618,
                  name: "Timber Wolf Trail",
                },
                city: "Cedar Hill",
                state: "Tennessee",
                country: "United States",
                postcode: 82900,
                coordinates: {
                  latitude: "24.0231",
                  longitude: "-147.4951",
                },
                timezone: {
                  offset: "-7:00",
                  description: "Mountain Time (US & Canada)",
                },
              },
              email: "judith.stevens@example.com",
              login: {
                uuid: "7b11b055-c454-4a95-9185-ec58176c8181",
                username: "sadzebra247",
                password: "basketba",
                salt: "sIuUPn6K",
                md5: "0f5028a17d3424b8b6227efa93fded48",
                sha1: "075a84cac0818d0fa61e864c93bb94a299a6a58d",
                sha256:
                  "aa24a6a3e67571fa12a992702f5b17ae5d6f4b507ba9a2e8679af77e55bbddc2",
              },
              dob: {
                date: "1987-12-10T13:18:27.983Z",
                age: 34,
              },
              registered: {
                date: "2019-04-14T15:01:09.576Z",
                age: 2,
              },
              phone: "(886)-411-0361",
              cell: "(878)-801-6824",
              id: {
                name: "SSN",
                value: "630-66-1702",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/5.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/5.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Miss",
                first: "Anna",
                last: "Warren",
              },
              location: {
                street: {
                  number: 8865,
                  name: "Pockrus Page Rd",
                },
                city: "Seattle",
                state: "Connecticut",
                country: "United States",
                postcode: 55655,
                coordinates: {
                  latitude: "-52.5671",
                  longitude: "-26.9771",
                },
                timezone: {
                  offset: "-7:00",
                  description: "Mountain Time (US & Canada)",
                },
              },
              email: "anna.warren@example.com",
              login: {
                uuid: "f62c61e9-56a3-4456-86fd-649271debe62",
                username: "goldengoose451",
                password: "slutty",
                salt: "JQaiAXJo",
                md5: "ff3398fabd5bd63038335d21fc87a334",
                sha1: "bb70496c26005caf65f3cb34a1147c8f86cc4d11",
                sha256:
                  "dcf149f5dcd3bd16bab7c30ca72e1c8eabcbcf121a44633ba250b324e2848218",
              },
              dob: {
                date: "1959-03-06T11:58:40.430Z",
                age: 62,
              },
              registered: {
                date: "2009-09-04T15:31:58.138Z",
                age: 12,
              },
              phone: "(821)-085-7391",
              cell: "(494)-420-0932",
              id: {
                name: "SSN",
                value: "635-37-3401",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/11.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/11.jpg",
              },
              nat: "US",
            },
            {
              gender: "male",
              name: {
                title: "Mr",
                first: "Rene",
                last: "Miles",
              },
              location: {
                street: {
                  number: 4488,
                  name: "Central St",
                },
                city: "Indianapolis",
                state: "Alaska",
                country: "United States",
                postcode: 19999,
                coordinates: {
                  latitude: "-84.9088",
                  longitude: "-144.5465",
                },
                timezone: {
                  offset: "+2:00",
                  description: "Kaliningrad, South Africa",
                },
              },
              email: "rene.miles@example.com",
              login: {
                uuid: "f30a7bf7-1469-4148-b921-c03970e0289f",
                username: "heavyelephant230",
                password: "pancho",
                salt: "p7eAboea",
                md5: "8c238947a9f05ef3ed2d347056cf2942",
                sha1: "9c9d8f99860c501de414886036453d9f0276bf67",
                sha256:
                  "6b52f4d34da8d6ef1addce5cfe10c8dad10ed1e103dccfb7532169f7cc88c4d8",
              },
              dob: {
                date: "1963-02-01T20:57:41.117Z",
                age: 58,
              },
              registered: {
                date: "2016-08-02T11:05:28.672Z",
                age: 5,
              },
              phone: "(441)-093-5651",
              cell: "(432)-569-6594",
              id: {
                name: "SSN",
                value: "899-13-3986",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/men/51.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/men/51.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Ms",
                first: "Yolanda",
                last: "Gilbert",
              },
              location: {
                street: {
                  number: 2151,
                  name: "Valwood Pkwy",
                },
                city: "North Valley",
                state: "Rhode Island",
                country: "United States",
                postcode: 43041,
                coordinates: {
                  latitude: "-30.3895",
                  longitude: "-47.7704",
                },
                timezone: {
                  offset: "+11:00",
                  description: "Magadan, Solomon Islands, New Caledonia",
                },
              },
              email: "yolanda.gilbert@example.com",
              login: {
                uuid: "c1176766-f34e-4ed2-a371-62aae07a612e",
                username: "blackostrich967",
                password: "snake",
                salt: "zLfbxhGQ",
                md5: "7dc409ace2db9706cd1d3c9617562b38",
                sha1: "e7eeb6ec3e78137fff1f2938714bb52381c32c30",
                sha256:
                  "36d4fa87f274588f8b6690682efcc498aa1e1b21db111fd88be7efce7942abf6",
              },
              dob: {
                date: "1946-11-11T03:42:36.395Z",
                age: 75,
              },
              registered: {
                date: "2011-05-02T14:23:54.648Z",
                age: 10,
              },
              phone: "(742)-793-8520",
              cell: "(204)-049-2606",
              id: {
                name: "SSN",
                value: "508-11-7073",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/61.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/61.jpg",
              },
              nat: "US",
            },
            {
              gender: "female",
              name: {
                title: "Mrs",
                first: "Stacey",
                last: "Carlson",
              },
              location: {
                street: {
                  number: 1224,
                  name: "Wheeler Ridge Dr",
                },
                city: "Dallas",
                state: "Maryland",
                country: "United States",
                postcode: 86204,
                coordinates: {
                  latitude: "22.5413",
                  longitude: "88.3673",
                },
                timezone: {
                  offset: "+3:00",
                  description: "Baghdad, Riyadh, Moscow, St. Petersburg",
                },
              },
              email: "stacey.carlson@example.com",
              login: {
                uuid: "ec7ee3f5-4120-4dd5-be82-835ae17e298c",
                username: "sadgoose485",
                password: "jungle",
                salt: "4ziO75pY",
                md5: "b2ce338dbadae16aca660e68dedc6fdc",
                sha1: "c646b33d35ab941eeded26095b486bb6c7332b0e",
                sha256:
                  "c5f7d33ef3cc178b93c2064b31c82c98c82486497cb9a502f1245ae8aa7f836c",
              },
              dob: {
                date: "1989-07-04T17:33:09.153Z",
                age: 32,
              },
              registered: {
                date: "2002-04-02T04:16:13.494Z",
                age: 19,
              },
              phone: "(289)-679-1375",
              cell: "(573)-455-6875",
              id: {
                name: "SSN",
                value: "979-10-7423",
              },
              picture: {
                large: "https://randomuser.me/api/portraits/women/64.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
                thumbnail:
                  "https://randomuser.me/api/portraits/thumb/women/64.jpg",
              },
              nat: "US",
            },
          ],
          info: {
            seed: "04af236963a3ebcd",
            results: 20,
            page: 1,
            version: "1.3",
          },
        });
        console.log(data);

        // console.log(data);
        // data = JSON.stringify(data);
        // send the api request here
        var config = {
          method: "post",
          url: "/api/randomUser",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        this.setState({ textErrors: "Malformed JSON in Text Box, try again." });
      }
    } else {
      // use file input
      try {
        let file =
          document.getElementsByClassName("json-file-input")[0].files[0];
        let reader = new FileReader();
        reader.readAsText(file);

        // event fired when file is read
        reader.addEventListener("load", function (e) {
          // contents of the file
          let text = e.target.result;
          document.getElementsByClassName("json-text-input")[0].value = text;
          try {
            data = JSON.parse(text);
          } catch (error) {
            this.setState({ jsonErrors: "Malformed JSON in File, try again." });
          }
          // send the api request here
        });

        // event fired when file reading failed
        reader.addEventListener("error", function () {
          this.setState({ errors: "Error in Reading File, try again." });
        });
      } catch (error) {
        this.setState({ errors: "Error in Reading File, try again." });
      }
    }
  };

  render() {
    return (
      <div className="homepage-container">
        <h2>Random User Data Visualiser</h2>
        <form className="data-input-form">
          <div className="radio-container">
            <input
              type="radio"
              id="text"
              name="input-type"
              value="text"
              defaultChecked="checked"
              onChange={(e) => this.switchInput()}
            ></input>
            <label htmlFor="text">Text</label>
            <input
              type="radio"
              id="file"
              name="input-type"
              value="file"
              selected={this.state.text}
              onChange={(e) => this.switchInput()}
            ></input>
            <label htmlFor="file">File</label>
          </div>

          <textarea
            className="json-text-input"
            disabled={this.state.text}
            defaultValue={JSON.stringify(sampleData)}
            spellCheck="false"
          ></textarea>
          <input
            type="file"
            accept=".json"
            className="json-file-input"
            disabled={!this.state.text}
          ></input>
          <input
            type="button"
            className="json-visualize"
            value="Visualize"
            onClick={(e) => this.visualize(e)}
          ></input>
          <div className="form-errors">{this.state.jsonErrors}</div>
          <div className="form-errors">{this.state.errors}</div>
          <div className="form-errors">{this.state.textErrors}</div>
        </form>
      </div>
    );
  }
}

export default HomePage;
