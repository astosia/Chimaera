// Clay Config: see https://github.com/pebble/clay
module.exports = [
  {
    "type": "heading",
    "defaultValue": "Settings"
  },
  {
  "type": "heading",
  "defaultValue": "Set elements to the same colour as the background to hide them.",
  "size":6
  },
  {
    "type": "section",
    "items": [
      {
       "type": "select",
       "messageKey": "FontChoice",
       "defaultValue": 'steel',
       "label": "Time & Date Font",
       "capabilities":["HEALTH"],
       "options": [
         {
           "label": "Steelfish",
           "value": "steel",
         },
         {
           "label": "Open Dyslexic",
           "value": "opend",
         },
         {
           "label": "Nouveau",
           "value": "zep",
         },
         {
           "label": "Binner Gothic",
           "value": "goth",
         },
         {
           "label": "Copse",
           "value": "cop",
         }
       ]
      },
      {
        "type": "heading",
        "defaultValue": "Top Section",
        "size":4
      },
      {
        "type": "color",
        "messageKey": "FrameColor2",
        "defaultValue": "0x000000",
        "label": "Background Colour",
        "allowGray":true
      },
      {
        "type": "color",
        "messageKey": "Text3Color",
        "defaultValue": "0xFFFFFF",
        "label": "Day of the Week Colour",
        "allowGray":true
      },
      {
        "type": "color",
        "messageKey": "Text6Color",
        "defaultValue": "0xFFFFFF",
        "label": "Battery Bar Colour",
        "allowGray":true
      },
      {
        "type": "heading",
        "defaultValue": "Middle Section",
        "size":4
      },
      {
        "type": "toggle",
        "messageKey": "AddZero12h",
        "label": "Add leading zero to 12h time",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "messageKey": "RemoveZero24h",
        "label": "Remove leading zero from 24h time",
        "defaultValue": false
      },
      {
        "type": "color",
        "messageKey": "FrameColor1",
        "defaultValue": "0x000000",
        "label": "Background Colour",
        "allowGray":true
      },
      {
        "type": "color",
        "messageKey": "HourColor",
        "defaultValue": "0xFFFFFF",
        "label": "Time Colour",
        "allowGray":true
      },
      {
        "type": "heading",
        "defaultValue": "Bottom Section",
        "size":4
      },
      {
        "type": "color",
        "messageKey": "FrameColor",
        "defaultValue": "0x000000",
        "label": "Background Colour",
        "allowGray":true
      },
      {
        "type": "color",
        "messageKey": "MinColor",
        "defaultValue": "0xFFFFFF",
        "label": "Month & Date Colour",
        "allowGray":true
      },
      {
        "type": "color",
        "messageKey": "Text5Color",
        "defaultValue": "0xFFFFFF",
        "label": "BT & QT Colour",
        "allowGray":true
      },
      {"type": "section",
       "items": [
         {
           "type": "heading",
           "defaultValue": "Night Theme",
           "size":4
         } ,
         {
           "type": "toggle",
           "messageKey": "NightTheme",
           "label": "Activate Night Theme",
           "defaultValue": false,
         },
         {
           "type": "heading",
           "defaultValue": "Top Section Night",
           "size":4
         },
         {
            "type": "color",
            "messageKey": "FrameColor2N",
            "defaultValue": "0xFFFFFF",
            "label": "Background Colour",
            "allowGray":true
         },
         {
           "type": "color",
           "messageKey": "Text3ColorN",
           "defaultValue": "0x000000",
           "label": "Day of the Week Colour",
           "allowGray":true
         },
         {
          "type": "color",
          "messageKey": "Text6ColorN",
          "defaultValue": "0x000000",
          "label": "Battery Bar Colour",
          "allowGray":true
         },
         {
           "type": "heading",
           "defaultValue": "Middle Section Night",
           "size":4
         },
         {
           "type": "color",
           "messageKey": "FrameColor1N",
           "defaultValue": "0xFFFFFF",
           "label": "Background Colour",
           "allowGray":true
         },
         {
           "type": "color",
           "messageKey": "HourColorN",
           "defaultValue": "0x000000",
          "label": "Time Colour",
          "allowGray":true
         },
         {
           "type": "heading",
           "defaultValue": "Bottom Section Night",
           "size":4
         },
         {
            "type": "color",
            "messageKey": "FrameColorN",
            "defaultValue": "0xFFFFFF",
            "label": "Background Colour",
            "allowGray":true
         },
         {
          "type": "color",
          "messageKey": "MinColorN",
          "defaultValue": "0x000000",
          "label": "Date & Month Colour",
          "allowGray":true
         },
         {
          "type": "color",
          "messageKey": "Text5ColorN",
          "defaultValue": "0x000000",
          "label": "BT & QT Colour",
          "allowGray":true
         }
       ]
         }
       ]
      },
      {
          "type": "submit",
          "defaultValue":"SAVE"
          },
          {
          "type": "heading",
          "defaultValue": "version v1.0",
          "size":6
          },
          {
          "type": "heading",
          "defaultValue": "Made in the UK",
          "size":6
          }
        ];
