// ===============================================================================
// DATA
// Below data will hold all of the friends name.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var nameArrey = [
    {
        "name":"priyanka chopra",
        "photo":"https://images.search.yahoo.com/search/images?p=priyanka+chopra+pictures&fr=mcafee&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc7%2FPriyanka_nikon_camera.jpg#id=0&iurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc7%2FPriyanka_nikon_camera.jpg&action=click",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },{
        "name":"robert downey",
        "photo":"https://images.search.yahoo.com/search/images;_ylt=AwrJ6ym4YYFddE8Ah0xXNyoA;_ylu=X3oDMTE0aGkwaHVvBGNvbG8DYmYxBHBvcwMxBHZ0aWQDQjg1NjZfMQRzZWMDcGl2cw--?p=robert+downy&fr2=piv-web&fr=mcafee&guccounter=1&guce_referrer=aHR0cHM6Ly9zZWFyY2gueWFob28uY29tL3NlYXJjaD9mcj1tY2FmZWUmdHlwZT1FMjE0VVMxMDVHMCZwPXJvYmVydCtkb3dueQ&guce_referrer_sig=AQAAAH-BLathJU5iiGcBXyb3UveUmFzuY66XCe4i0HWWy7BQlec-oyd8-NS31uVU9zq0gwr2rv056FkEg_Q0zuDsr8lJcZHNEHd8g0RZwuEq8BplbdOBHL49-mplgPaOQMWl-MRRmhgwyl3t_UzopSP7o1LxezAywSlzT-tfkx-Bdkz9#id=5&iurl=http%3A%2F%2Fcdn.bgr.com%2F2015%2F04%2Frobert-downey-jr.jpg%3Fquality%3D98%26strip%3Dall&action=click",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ] 
      },{
        "name":"nick jonas",
        "photo":"https://images.search.yahoo.com/search/images;_ylt=A2KLfSAmYoFdi_sA0GFXNyoA;_ylu=X3oDMTE0aGkwaHVvBGNvbG8DYmYxBHBvcwMxBHZ0aWQDQjg1NjZfMQRzZWMDcGl2cw--?p=nick+jonas&fr2=piv-web&fr=mcafee&guccounter=1&guce_referrer=aHR0cHM6Ly9zZWFyY2gueWFob28uY29tL3NlYXJjaDtfeWx0PUF3cko3RmYuWVlGZGdQQUFsckJYTnlvQTtfeWxjPVgxTURNamMyTmpZM09RUmZjZ015QkdaeUEyMWpZV1psWlFSbWNqSURjMkl0ZEc5d0JHZHdjbWxrQTA1WWExOXVTRTlPVVRCbFFXOUNOWFYxVDB4dE5VRUVibDl5YzJ4MEF6QUVibDl6ZFdkbkF6RXdCRzl5YVdkcGJnTnpaV0Z5WTJndWVXRm9iMjh1WTI5dEJIQnZjd014QkhCeGMzUnlBd1J3Y1hOMGNtd0RNQVJ4YzNSeWJBTXhNQVJ4ZFdWeWVRTnVhV05ySlRJd2FtOXVZWE1FZEY5emRHMXdBekUxTmpnM05qQXpOVFktP3A9bmljaytqb25hcyZmcjI9c2ItdG9wJmZyPW1jYWZlZSZ0eXBlPUUyMTRVUzEwNUcw&guce_referrer_sig=AQAAACN-8CcQBNH5LgwKU5k9Hpg1fAroD1SVUEwzmJtd-Wg76X3HOj7uzrMoe3419DpGIvkTufJcBT-_FeadxtpRHCcZJDV0pqAIcc5DtT_00sF0SyFxBnsVb4zOhbof3CY4Tbs3Ir22m0L6TJTcXZgXKeImAbk6wUTi0lUnHRdpumqX#id=2&iurl=http%3A%2F%2Fwww3.pictures.zimbio.com%2Fgi%2FBillboard%2BWomen%2BIn%2BMusic%2B2016%2B7ZHs4HdMorgx.jpg&action=click",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ] 
      },{
        "name":"amitabh bhachchan",
        "photo":"https://images.search.yahoo.com/search/images;_ylt=AwrJ61qWYoFdx84ASiJXNyoA;_ylu=X3oDMTE0aGkwaHVvBGNvbG8DYmYxBHBvcwMxBHZ0aWQDQjg1NjZfMQRzZWMDcGl2cw--?p=amitabh+bachchan&fr2=piv-web&fr=mcafee&guccounter=1&guce_referrer=aHR0cHM6Ly9zZWFyY2gueWFob28uY29tL3NlYXJjaD9mcj1tY2FmZWUmdHlwZT1FMjE0VVMxMDVHMCZwPWFtaXRhYmgrYmFjaGNoYW4&guce_referrer_sig=AQAAALgiA2sM7N3JH3bEnzdWwtewYp0gtR5uQHhgNwKZ2XhLUFMewMOfl9H7ta7T4R6j5p_5O2WaeCdIc1ROuCA3vqiBnukyWXMDwwW5kuXZOHHHdxYayOvAlyKJxjWuVSNCDvs1p2RR2gLbOG7p7L7KOToxjMJVsF0WVCjjjn0LLNBf#id=144&iurl=https%3A%2F%2Fwww.creativegaga.com%2Fwp-content%2Fuploads%2F2017%2F06%2FVivek_AB-PAINTING.jpg&action=click",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ] 
      }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = nameArrey;
