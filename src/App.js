import React, { Component } from 'react';
import List from './List';
import './App.css';

const comics = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2018 MARVEL",
  "attributionText": "Data provided by Marvel. © 2018 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
  "etag": "547f5ca6b4ffec7e12acad41845d4ed6765ab87b",
  "data": {
    "offset": 0,
    "limit": 10,
    "total": 409,
    "count": 10,
    "results": [
      {
        "id": 49248,
        "digitalId": 34645,
        "title": "Wolverine (2014) #12",
        "issueNumber": 12,
        "variantDescription": "",
        "description": "ONE MONTH TO DIE! A DOUBLE-SIZED SERIES FINALE!\n- Looks like Sabretooth is ready for his final showdown with Logan and he sure picked a meaningful venue.\n- Didn't we just see a fight in a shopping mall that seriously scarred Logan?\n- Oh, right. That whole \"messing with Wolverine\" thing.",
        "modified": "2014-09-09T12:19:43-0400",
        "isbn": "",
        "upc": "759606080091001211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 64,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "ONE MONTH TO DIE! A DOUBLE-SIZED SERIES FINALE!\n- Looks like Sabretooth is ready for his final showdown with Logan and he sure picked a meaningful venue.\n- Didn't we just see a fight in a shopping mall that seriously scarred Logan?\n- Oh, right. That whole \"messing with Wolverine\" thing."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49248",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49248/wolverine_2014_12?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-12/digital-comic/34645?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=34645&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/34645?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-08-27T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-08-04T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2015-02-23T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-08-27T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 5.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 5.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/53fb87c9a2d75",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/53fb87c9a2d75",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9484",
              "name": "Steve Mcniven",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11976",
              "name": "Peter M. Woods",
              "role": "artist"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110581",
              "name": "cover from Wolverine (2014) #12",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110582",
              "name": "story from Wolverine (2014) #12",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49248/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49247,
        "digitalId": 34577,
        "title": "Wolverine (2014) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": "ONE MONTH TO DIE!\n- With the fates of two human beings placed in her hands, Pinch is faced with a decision that may haunt her for the rest of her life.\n- That is, unless Wolverine and his S.H.I.E.L.D. cavalry can reach her in time.\n- Classic Sabretooth, still finds time to mess with Logan, even while he's busy trying to remake the world in his image.",
        "modified": "2014-09-09T10:10:54-0400",
        "isbn": "",
        "upc": "759606080091001111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "ONE MONTH TO DIE!\n- With the fates of two human beings placed in her hands, Pinch is faced with a decision that may haunt her for the rest of her life.\n- That is, unless Wolverine and his S.H.I.E.L.D. cavalry can reach her in time.\n- Classic Sabretooth, still finds time to mess with Logan, even while he's busy trying to remake the world in his image."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49247",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49247/wolverine_2014_11?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-11/digital-comic/34577?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=34577&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/34577?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-08-13T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-07-21T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2015-02-09T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-08-13T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/53e3ce626b203",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/53e3ce626b203",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49247/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9484",
              "name": "Steve Mcniven",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11976",
              "name": "Peter M. Woods",
              "role": "artist"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49247/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49247/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110579",
              "name": "cover from Wolverine (2014) #11",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110580",
              "name": "story from Wolverine (2014) #11",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49247/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49246,
        "digitalId": 34154,
        "title": "Wolverine (2014) #10",
        "issueNumber": 10,
        "variantDescription": "",
        "description": "- It's the beginning of the end for Wolverine!\n- Logan comes clean to his old friends as Sabretooth marks Wolverine's new love Pinch for death!\n- Pete Woods (Detective Comics) joins Paul Cornell as Logan enters his most dire hour!",
        "modified": "2014-07-25T16:29:16-0400",
        "isbn": "",
        "upc": "759606080091001011",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "- It's the beginning of the end for Wolverine!\n- Logan comes clean to his old friends as Sabretooth marks Wolverine's new love Pinch for death!\n- Pete Woods (Detective Comics) joins Paul Cornell as Logan enters his most dire hour!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49246",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49246/wolverine_2014_10?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-10/digital-comic/34154?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=34154&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/34154?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-07-09T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-06-16T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2015-01-12T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-07-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/53b3126604e49",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/53b3126604e49",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49246/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9484",
              "name": "Steve Mcniven",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/826",
              "name": "Pete Woods",
              "role": "artist"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49246/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49246/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110577",
              "name": "cover from Wolverine (2014) #10",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110578",
              "name": "story from Wolverine (2014) #10",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49246/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49245,
        "digitalId": 33900,
        "title": "Wolverine (2014) #9",
        "issueNumber": 9,
        "variantDescription": "",
        "description": "- Stranded in Japan, Logan confronts his future...and it ain't a bright one.\n- It's all lead up to this - the next chapter of Wolverine's life begins now!\n- Three Months to Die - The title says it all!",
        "modified": "2014-07-16T16:23:36-0400",
        "isbn": "",
        "upc": "759606080091000911",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "- Stranded in Japan, Logan confronts his future...and it ain't a bright one.\n- It's all lead up to this - the next chapter of Wolverine's life begins now!\n- Three Months to Die - The title says it all!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49245",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49245/wolverine_2014_9?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-9/digital-comic/33900?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=33900&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/33900?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-06-25T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-06-02T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2014-12-29T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-06-25T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/30/539f569a18e7a",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/30/539f569a18e7a",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/53288b4ba8113",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49245/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9484",
              "name": "Steve Mcniven",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
              "name": "Gerardo Sandoval",
              "role": "artist"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49245/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49245/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110575",
              "name": "cover from Wolverine (2014) #9",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110576",
              "name": "story from Wolverine (2014) #9",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49245/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49244,
        "digitalId": 33857,
        "title": "Wolverine (2014) #8",
        "issueNumber": 8,
        "variantDescription": "",
        "description": "- Logan, Iron Fist, Shang Chi vs. an army of deadly ninja.\n- Three Months to Die - The title says it all!",
        "modified": "2014-07-16T14:51:42-0400",
        "isbn": "",
        "upc": "759606080091000811",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "- Logan, Iron Fist, Shang Chi vs. an army of deadly ninja.\n- Three Months to Die - The title says it all!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49244",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49244/wolverine_2014_8?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-8/digital-comic/33857?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=33857&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/33857?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-06-11T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-05-19T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2014-12-15T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-06-11T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5390c59d6b201",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5390c59d6b201",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/c0/53288a8264543",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49244/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11575",
              "name": "Kris Anka",
              "role": "artist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9484",
              "name": "Steve Mcniven",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49244/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49244/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110573",
              "name": "cover from Wolverine (2014) #8",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110574",
              "name": "story from Wolverine (2014) #8",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49244/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49243,
        "digitalId": 33952,
        "title": "Wolverine (2014) #7",
        "issueNumber": 7,
        "variantDescription": "",
        "description": "- As his plan to take down Sabretooth takes shape, Wolverine goes undercover in Madripoor - but he's not the only one with his eyes on Sabretooth's empire - what do PETE WISDOM & MI-13 have to do with it?\n- Paul Cornell (WOLVERINE: KILLABLE) and Gerardo Sandoval (CABLE & X-FORCE) bring you a two part epic that'll push the mortal Wolverine to his limits!",
        "modified": "2014-07-14T14:56:32-0400",
        "isbn": "",
        "upc": "759606080091000711",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "- As his plan to take down Sabretooth takes shape, Wolverine goes undercover in Madripoor - but he's not the only one with his eyes on Sabretooth's empire - what do PETE WISDOM & MI-13 have to do with it?\n- Paul Cornell (WOLVERINE: KILLABLE) and Gerardo Sandoval (CABLE & X-FORCE) bring you a two part epic that'll push the mortal Wolverine to his limits!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49243",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49243/wolverine_2014_7?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-7/digital-comic/33952?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=33952&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/33952?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-05-28T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-05-14T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2014-11-24T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-05-28T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/537a4e1dee570",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/537a4e1dee570",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49243/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
              "name": "Gerardo Sandoval",
              "role": "artist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1156",
              "name": "Ryan Stegman",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49243/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49243/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110571",
              "name": "cover from Wolverine (2014) #7",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110572",
              "name": "story from Wolverine (2014) #7",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49243/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49242,
        "digitalId": 33893,
        "title": "Wolverine (2014) #6",
        "issueNumber": 6,
        "variantDescription": "",
        "description": "- As his plan to take down Sabretooth takes shape, Wolverine goes undercover in Madripoor - but he's not the only one with his eyes on Sabretooth's empire - what do PETE WISDOM & MI-13 have to do with it?\n- Paul Cornell (WOLVERINE: KILLABLE) and Gerardo Sandoval (CABLE & X-FORCE) bring you a two part epic that'll push the mortal Wolverine to his limits!",
        "modified": "2014-07-14T13:44:25-0400",
        "isbn": "",
        "upc": "759606080091000611",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "- As his plan to take down Sabretooth takes shape, Wolverine goes undercover in Madripoor - but he's not the only one with his eyes on Sabretooth's empire - what do PETE WISDOM & MI-13 have to do with it?\n- Paul Cornell (WOLVERINE: KILLABLE) and Gerardo Sandoval (CABLE & X-FORCE) bring you a two part epic that'll push the mortal Wolverine to his limits!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49242",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49242/wolverine_2014_6?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-6/digital-comic/33893?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=33893&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/33893?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-05-14T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-04-30T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2014-11-10T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-05-14T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/536cdce3d98a4",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/536cdce3d98a4",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/52f3b58a49544",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49242/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
              "name": "Gerardo Sandoval",
              "role": "artist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1156",
              "name": "Ryan Stegman",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49242/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49242/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110569",
              "name": "cover from Wolverine (2014) #6",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110570",
              "name": "story from Wolverine (2014) #6",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49242/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49241,
        "digitalId": 33555,
        "title": "Wolverine (2014) #5",
        "issueNumber": 5,
        "variantDescription": "",
        "description": "ASSASSINS ASSEMBLE!\n- Logan faces his most dire threat yet -- with no healing factor to protect him.\nGerardo Sandoval (CABLE & X-FORCE) joins the team of the All-New Marvel Now Smash hit!",
        "modified": "2014-07-14T11:58:42-0400",
        "isbn": "",
        "upc": "759606080091000511",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "ASSASSINS ASSEMBLE!\n- Logan faces his most dire threat yet -- with no healing factor to protect him.\nGerardo Sandoval (CABLE & X-FORCE) joins the team of the All-New Marvel Now Smash hit!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49241",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49241/wolverine_2014_5?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-5/digital-comic/33555?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=33555&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/33555?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-04-30T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-04-16T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2014-10-27T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-04-30T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53592e58262ad",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53592e58262ad",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/52f3b449ddbf1",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/52f3b42d7b775",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/52f3b3f91cd7c",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49241/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12369",
              "name": "Gerardo Sandoval",
              "role": "artist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1156",
              "name": "Ryan Stegman",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49241/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49241/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110567",
              "name": "cover from Wolverine (2014) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110568",
              "name": "story from Wolverine (2014) #5",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49241/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 49240,
        "digitalId": 33554,
        "title": "Wolverine (2014) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "EVIL LURKS IN THE HEART OF THE WOLF LIKE MAN!\n- Why did Logan leave the Jean Grey School? Your Answers are here!\n- Paul Cornell (WOLVERINE) and Ryan Stegman (SUPERIOR SPIDER-MAN) close off first arc of the world's most dangerous mutant!",
        "modified": "2014-04-14T14:18:49-0400",
        "isbn": "",
        "upc": "759606080091000411",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "EVIL LURKS IN THE HEART OF THE WOLF LIKE MAN!\n- Why did Logan leave the Jean Grey School? Your Answers are here!\n- Paul Cornell (WOLVERINE) and Ryan Stegman (SUPERIOR SPIDER-MAN) close off first arc of the world's most dangerous mutant!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/49240",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/49240/wolverine_2014_4?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Wolverine-4/digital-comic/33554?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=33554&utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/33554?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-04-16T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-04-02T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2014-10-20T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2014-04-16T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/534c25563c4ad",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/534c25563c4ad",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/52d83ee1c0be1",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49240/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1156",
              "name": "Ryan Stegman",
              "role": "penciller (cover)"
            }
          ],
          "returned": 2
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49240/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49240/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110565",
              "name": "cover from Wolverine (2014) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/110566",
              "name": "story from Wolverine (2014) #4",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/49240/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 50068,
        "digitalId": 0,
        "title": "Wolverine (2014) #3 (Adams Variant)",
        "issueNumber": 3,
        "variantDescription": "Adams Variant",
        "description": "<ul><li>Logan&#39;s training continues&hellip;and he&#39;s got his sights set on Sabretooth.</li><li>What could make Logan turn his back on the school and his friends?</li></ul>",
        "modified": "2014-03-04T16:34:01-0500",
        "isbn": "",
        "upc": "759606080091000321",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "<ul><li>Logan&#39;s training continues&hellip;and he&#39;s got his sights set on Sabretooth.</li><li>What could make Logan turn his back on the school and his friends?</li></ul>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/50068",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/50068/wolverine_2014_3_adams_variant/adams_variant?utm_campaign=apiRef&utm_source=e41eac565ab1f080af479de3722cf30f"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/18517",
          "name": "Wolverine (2014 - Present)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49239",
            "name": "Wolverine (2014) #3"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2014-03-12T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2014-02-26T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/03/531646176eb51",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/03/531646176eb51",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/30/52f3afb96b0b6",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/50068/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12208",
              "name": "Arthur Adams",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1092",
              "name": "Paul Cornell",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/1156",
              "name": "Ryan Stegman",
              "role": "artist"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/50068/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
              "name": "Wolverine"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/50068/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/112179",
              "name": "cover from Wolverine (2014) #3 (TBD ARTIST VARIANT)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/112180",
              "name": "story from Wolverine (2014) #3 (TBD ARTIST VARIANT)",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/50068/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <List result={comics.data.results} />
        <List result={comics.data.results} />
      </div>
    );
  }
}

export default App;
