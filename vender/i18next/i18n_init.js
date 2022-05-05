/*
 * Regex to select RU on .json file: (?<=: ".*)([а-яА-ЯёЁ].*)(?=")
 * Regex to find RU in files (?<=['">])([а-яА-ЯёЁ].*?)(?=['"<])
 * i18next@20.6.1 compatible with older (e.g. Chrome v38) version for WebOS
 */ 
 

const resources_lang = 
{
   "en":{
      "translation":{
         "head":{
            "title":"Lampa - EN",
            "description":"Lampa gives you freedom to watch what you want."
         },
         "about":{
            "title":"About the application",
            "desc":"The application is completely free and uses public links to get information about videos, new releases, popular movies, etc. All available information is used solely for educational purposes, the application does not use its own servers to distribute information.",
            "donate":"Donate",
            "version":"Version",
            "group":"Group",
            "contact":"Our channel",
            "translation":"Translator"
         },
         "menu":{
            "home":"Home",
            "movies":"Movies",
            "tvseries":"TV series",
            "catalog":"Catalog",
            "filter":"Filter",
            "collections":"Collections",
            "relise":"Releases",
            "anime":"Anime",
            "bookmark":"Bookmark",
            "like":"Like",
            "time":"Time",
            "history":"History",
            "timetable":"Time table",
            "mytorrents":"Torrents",
            "settings":"Settings",
            "about":"About",
            "console":"Console"
         },
         "utils":{
            "account":{
               "title":"Synchronization",
               "i_title_1":"I confirm",
               "i_subtitle_1":"All bookmarks will be transferred to the profile (",
               "i_title_2":"Cancel",
               "succes_notify":"All bookmarks have been successfully transferred",
               "notify_1":"Failed to get list of profiles",
               "token_1":"Authorized",
               "token_2":"You are logged in ",
               "token_3":"Login failed",
               "token_4":"Waiting for login",
               "network_silent":"General",
               "network_silent_result_1":"Error",
               "network_silent_result_2":"Error",
               "network_silent_result_3":"No network connection"
            },
            "android":{
               "no_native":"No Native request",
               "voicestart":"Only works on Android TV",
               "checkv_1":"Please update the app.<br>Version required: ",
               "checkv_2":"<br>Current version: ",
               "checkv_3":"Update the application.<br>Required version: "
            },
            "cloud":{
               "renderStatus_1":"Disabled",
               "renderStatus_2":"Turn on sync",
               "renderStatus_3":"Not authorized",
               "renderStatus_4":"Login required ",
               "renderStatus_5":"Authorization failed",
               "renderStatus_6":"Check the entered data and try again",
               "renderStatus_7":"Entered",
               "renderStatus_8":"You have successfully logged in",
               "renderStatus_9":"Synchronized"
            },
            "api":{
               "cub":{
                  "filter_1":"Now watching",
                  "filter_2":"Last addition",
                  "filter_3":"Movies",
                  "filter_4":"Cartoons",
                  "filter_5":"TV series",
                  "filter_6":"Adventures",
                  "filter_7":"Comedy",
                  "filter_8":"Family",
                  "filter_9":"Horror",
                  "filter_10":"Fiction",
                  "filter_11":"Thriller",
                  "book_1":"Continue browsing",
                  "book_2":"You watched",
                  "recomend_1":"Recommended to watch",
                  "filter_12":"Now watching",
                  "filter_13":"New episodes",
                  "filter_14":"Popular",
                  "filter_15":"Last addition",
                  "filter_16":"News of this year",
                  "filter_17":"Highly Rated"
               },
               "ivi":{
                  "62":"War drama",
                  "73":"Crime dramas",
                  "217":"Historical Series",
                  "917":"Horror Thrillers",
                  "1246":"screen adaptations of detectives",
                  "1327":"Adventure Comedies",
                  "1335":"Crime Comedies",
                  "1411":"Romantic Drama",
                  "1413":"Fantastic Drama",
                  "1418":"Mystery Movies",
                  "2460":"Cartoons for the whole family",
                  "4495":"Foreign Series",
                  "4655":"Recommended to see",
                  "oncomp_1":"Continue browsing",
                  "oncomp_2":"You watched",
                  "movie_new":"Movie Premieres",
                  "movie_best":"Best Movies",
                  "movie_popular":"Popular Now",
                  "movie_8448":"Ivi's Choice",
                  "movie_1984":"News",
                  "movie_1712":"Foreign",
                  "movie_935":"Russians",
                  "movie_12839":"Popular Now",
                  "movie_1057":"Ivi's Choice"
               },
               "okko":{
                  "cat_1":"New",
                  "cat_2":"Top New",
                  "cat_3":"Comedy Horror Movies",
                  "cat_4":"Movies about maniacs",
                  "cat_5":"Witch Movies",
                  "cat_6":"Zombie Movies",
                  "cat_7":"Russians",
                  "cat_8":"New",
                  "cat_9":"Very scary",
                  "cat_10":"About maniacs",
                  "cat_11":"With black humor",
                  "cat_12":"Lungs",
                  "cat_13":"Comedy",
                  "cat_14":"Russians"
               },
               "parser":{
                  "err_1":"Specify URL for parsing Jackett",
                  "err_2":"Specify link for parsing TorLook",
                  "err_3":"Unable to get magnet link",
                  "err_5":"Request error"
               },
               "tmdb":{
                  "now_playing":"Now watching",
                  "trending_day":"Today is in trend",
                  "trending_week":"Trendy for the week",
                  "upcoming":"Watch in cinema halls",
                  "popular":"Popular Movies",
                  "tv_popular":"Popular Series",
                  "top_rated":"Top movies",
                  "tv_top_rated":"Top series",
                  "oncom_1":"Continue browsing",
                  "oncomp_2":"You watched",
                  "oncomp_3":"Recommended to see",
                  "now_playing_wath":"Now watching",
                  "popular_2":"Popular",
                  "discover":"New",
                  "airing":"Today on the air",
                  "on_air":"This week",
                  "top_2":"Top",
                  "s_movie":"Movies",
                  "s_tv":"TV series",
                  "production":"Production",
                  "departament":"Directed by",
                  "gender_1":"Actress",
                  "gender_2":"Actor",
                  "movie_g1":"- Movies",
                  "tv_g2":"- TV series"
               }
            },
            "plugins":{
               "draw_1":"Install",
               "loadmem_1":"When loading the application, some plugins could not be loaded",
               "offlist_1":"View online",
               "offlist_2":"View online",
               "err_1":"Could not check if the plugin is working, but this does not mean that the plugin is not working. Restart the application to see if the plugin is loading.",
               "err_2":"For the plugin to work, you need to restart the application.",
               "sett_component_1":"This plugin is already installed.",
               "cat_details":"- Settings",
               "iscub_1":"Downloaded from CUB",
               "iscun_2":"Click to test plugin"
            },
            "reguest":{
               "jqxhr_1":"No network connection.",
               "jqxhr_2":"The requested page was not found. [404]",
               "jqxhr_3":"Authorization failed",
               "jqxhr_4":"Internal server error. [500]",
               "jqxhr_5":"The requested JSON parsing failed.",
               "jqxhr_6":"Request timed out.",
               "jqxhr_7":"The request was aborted.",
               "jqxhr_8":"Unknown error: "
            },
            "math":{
               "size_1":"0 Bytes",
               "sizes_1024":{
                  "0":"Byte",
                  "1":"KB",
                  "2":"MB",
                  "3":"GB",
                  "4":"TB",
                  "5":"PB"
               },
               "sizes_1000":{
                  "0":"page",
                  "1":"Kbit",
                  "2":"Mbps",
                  "3":"Gbit",
                  "4":"Tbit",
                  "5":"Pbit"
               },
               "months_arr":{
                  "0":"January",
                  "1":"February",
                  "2":"March",
                  "3":"April",
                  "4":"May",
                  "5":"June",
                  "6":"July",
                  "7":"August",
                  "8":"September",
                  "9":"October",
                  "10":"November",
                  "11":"December"
               },
               "days_arr":{
                  "0":"Sunday",
                  "1":"Monday",
                  "2":"Tuesday",
                  "3":"Wednesday",
                  "4":"Thursday",
                  "5":"Friday",
                  "6":"Saturday"
               }
            }
         },
         "card_parser":{
            "handing_out":"Handing out: ",
            "pumping":"pumping: "
         },
         "company":{
            "headquarters":"Headquarters:",
            "site":"Site:",
            "side":"Side:"
         },
         "filter":{
            "specify":"Specify",
            "sort":"Sort",
            "filter":"Filter"
         },
         "full":{
            "descr":{
               "name_genres":"Genre",
               "name_companies":"Production",
               "name_relise":"date of release",
               "name_budget":"Budget",
               "name_countries":"Countries"
            },
            "review":{
               "footer":"Like:"
            },
            "start":{
               "torrents":"Torrents",
               "trailers":"Trailers"
            }
         },
         "list_empty":{
            "title":"empty",
            "descr":"Nothing found for your filter, please refine your filter."
         },
         "more":{
            "title":"\n        More\n    "
         },
         "player":{
            "info":{
               "size":"Loading..."
            }
         },
         "plugins_catalog":{
            "working":"Working plugins",
            "working_descr":"Plugins that work exactly in the lamp.",
            "popular":"Popular plugins among users",
            "popular_descr":"Installation from unknown sources may cause the application to work incorrectly."
         },
         "search":{
            "main":{
               "title":"Search",
               "input":"Enter text..."
            }
         },
         "settings":{
            "title":"Settings",
            "account":{
               "account_use_name":"Synchronization",
               "account_use_descr":"Synchronization with the CUB service: Synchronization of your bookmarks, browsing history, tags and timecodes. Website: https://cub.watch",
               "account_user_hide":"",
               "user_info_name":"Logged in as",
               "user_profile_name":"Profile",
               "user_sync_name":"Synchronize",
               "user_sync_value":"Save local bookmarks to CUB account",
               "user_out_name":"Sign out",
               "signin":"Authorization",
               "signin_name":"Password",
               "status":"Status",
               "email_placeholder":"Not specified",
               "password_placeholder":"Not specified"
            },
            "cloud":{
               "use_cloud_name":"Synchronization",
               "use_cloud_descr":"Synchronization allows you to synchronize your bookmarks, browsing history, tags and timecodes. Connection instructions https://github.com/yumata/lampa/wiki",
               "authorization":"Authorization",
               "status":"Status",
               "token_placeholder":"Not specified"
            },
            "input":{
               "links":"Favorites"
            },
            "interface":{
               "size_name":"Interface size",
               "background":"Background",
               "background_name":"Show background",
               "background_type_name":"Background type",
               "performance":"Performance",
               "animation_name":"Animation",
               "animation_descr":"Animation of cards and content",
               "mask_name":"Border fade",
               "mask_descr":"Smooth fading of cards from below and from above",
               "scroll_type_name":"Scrolling type",
               "card_view_name":"Card view type",
               "card_view_descr":"As you scroll the feed, the cards will be loaded gradually or all will be loaded."
            },
            "main":{
               "account_name":"Account",
               "interface_name":"Interface",
               "player_name":"Player",
               "parser_name":"Parser",
               "torrserver_name":"TorrServer",
               "plugins_name":"Plugins",
               "cloud_name":"Synchronization",
               "more_name":"Other settings"
            },
            "more":{
               "start_page_name":"Start page",
               "start_page_descr":"Which page to start at startup",
               "source":"Source",
               "source_name":"Main source",
               "source_descr":"Where to get information about movies",
               "tmdb_lang_name":"TMDB",
               "tmdb_lang_descr":"What language to display data from TMDB",
               "poster_size_name":"Resolution of TMDB posters",
               "screensaver":"Screensaver",
               "screensaver_name":"Show splash screen when idle",
               "screensaver_type_name":"Screen saver type",
               "proxy":"Proxy",
               "proxy_tmdb_name":"Proxy TMDB",
               "proxy_other_name":"Proxy other resources",
               "others":"More",
               "pages_save_total_name":"How many pages to keep in memory",
               "pages_save_total_descr":"Keep pages as you left them.",
               "time_offset_name":"Shift time",
               "navigation_type_name":"Navigation type",
               "device_name_name":"Device name",
               "clear_storage_name":"Clear cache",
               "clear_storage_value":"All settings and data will be cleared",
               "device_placeholder":"For example: My Lampa",
               "hints_title":"Tips & tricks",
               "hints_name":"Show hints",
               "hints_again_name":"Show tips again"
            },
            "parser":{
               "parser_use_name":"Use parser",
               "parser_use_descr":"Hereby, you agree to accept all responsibility for the use of public links to view torrent and online content.",
               "parser_torrent_type_name":"Parser type for torrents",
               "parser_type":"Jackett",
               "jackett_url_name":"Link",
               "jackett_url_descr":"Provide a link to the Jackett script",
               "jackett_key_name":"Api key",
               "jackett_key_descr":"Located in Jackett",
               "torlook":"Torlook",
               "torlook_parse_type_name":"TorLook site parsing method",
               "parser_website_url_name":"Link to site parser",
               "parser_website_url_descr":"Register on the site scraperapi.com, register the link api.scraperapi.com?api_key=...&url={q}",
               "others":"More",
               "parse_lang_name":"Search",
               "parse_lang_descr":"What language to search in?",
               "parse_in_search_name":"Parser for search",
               "parse_in_search_descr":"Using parser for search results?",
               "jackett_url_placeholder":"For example: 192.168.x",
               "jackett_key_placeholder":"For example: sa0sk83d..",
               "parser_web_placeholder":"For example: scraperapi.com"
            },
            "player":{
               "player_name":"Player type",
               "player_descr":"Which player to play",
               "reset_player_name":"Reset default player",
               "reset_player_descr":"Resets the selected Android player in the application",
               "playlist_next_name":"Next series",
               "playlist_next_descr":"Automatically switch to the next series after the end of the current one",
               "player_timecode_name":"Timecode",
               "player_timecode_descr":"Resume from last viewed location",
               "player_scale_method_name":"Scaling method",
               "player_scale_method_descr":"How to calculate video scaling",
               "subtitle":"Subtitles",
               "subtitles_start_name":"Turn on",
               "subtitles_start_descr":"Always turn on subtitles after starting a video",
               "subtitles_size_name":"Size ",
               "subtitles_stroke_name":"Use edging",
               "subtitles_stroke_descr":"Subtitles will be outlined in black for better readability",
               "subtitles_backdrop_name":"Use underlay",
               "subtitles_backdrop_descr":"Subtitles will be displayed on a translucent background to improve readability",
               "others":"More",
               "video_quality_default_name":"Default video quality",
               "video_quality_default_descr":"Preferred video quality to watch"
            },
            "plugins":{
               "plugins_name":"Add plugin",
               "plugins_descr":"To remove an added plugin, hold or double-click the OK button on it",
               "install_name":"Install plugin",
               "install_descr":"Install plugin from available list"
            },
            "server":{
               "torrserver_use_link_name":"Use link",
               "links":"Links",
               "torrserver_url_name":"Main link",
               "torrserver_url_descr":"Specify the main link to the TorrServer script",
               "torrserver_url_two_name":"Extra link",
               "torrserver_url_two_descr":"Specify an additional link to the TorrServer script",
               "additionally":"Additionally",
               "internal_torrclient_name":"Built-in client",
               "internal_torrclient_descr":"Use the built-in TorrServe JS client, otherwise the system one will start.",
               "torrserver_savedb_name":"Save to database",
               "torrserver_savedb_descr":"The torrent will be added to the TorrServer database",
               "torrserver_preload_name":"Use preload buffer",
               "torrserver_preload_descr":"Wait for TorrServer preload buffer to fill before playing",
               "authorization":"Authorization",
               "torrserver_auth_name":"Password login",
               "torrserver_login_name":"Login",
               "torrserver_password_name":"Password",
               "torrurl_placeholder":"For example: 192.168.x",
               "torrurltwo_placeholder":"For example: 192.168.x",
               "torrlogin_placeholder":"Not specified",
               "torrpass_placeholder":"Not specified"
            }
         },
         "timeline_details":{
            "viewed":"Viewed"
         },
         "torrent":{
            "error":{
               "checklist_descr":"Unable to connect to TorrServe, the problem may be different. Let's quickly go through the list of possible problems and check everything.",
               "progress_steps":"Completed 0 out of 0",
               "checklist_list_1":"Is TorrServe running",
               "checklist_list_2":"Dynamic IP address",
               "checklist_list_3":"Protocol",
               "checklist_list_4":"Antivirus blocking",
               "checklist_list_5":"Check for availability",
               "checklist_list_6":"Still doesn't work",
               "checklist_footer":"Start Check",
               "nocheck":"Causes",
               "nocheck_1":"Requestreturned an invalid format to ping",
               "nocheck_2":"Answerfrom TorServer: ",
               "nocheck_todo":"Whatmake?",
               "nocheck_todo_1":"Umake sure you have the version of Matrix",
               "nocheck_check":"How to check?",
               "nocheck_check_1":"Open your browser and go to ",
               "nocheck_check_2":"Make sure the response contains a code",
               "noconnect_cause":"Causes",
               "noconnect_cause_1":"using address:",
               "noconnect_cause_2":"current address",
               "noconnect_cause_3":"is incorrect!",
               "noconnect_cause_4":"current response:",
               "noconnect_howto":"How is it right?",
               "noconnect_howto_1":"use address:",
               "noconnect_howto_2":"Use the Matrix version",
               "noconnect_howto_3":"on the same device, open a browser and go to the address",
               "noconnect_howto_4":"If the browser does not respond, check if TorrServe is running, or restart it.",
               "noconnect_howto_5":"if the browser responded, make sure the response contains a string",
               "nohash_cause":"Causes",
               "nohash_cause_1":"TorServer was unable to download the torrent file",
               "nohash_cause_2":"Response from TorServer:",
               "nohash_cause_3":"Link:",
               "nohash_whatto":"What to do?",
               "nohash_whatto_1":"Check if you configured Jackett correctly",
               "nohash_whatto_2":"Private sources may not provide a link to the file",
               "nohash_whatto_3":"Make sure Jackett can download the file too",
               "nohash_whatto_4":"Write to our telegram group: @lampa_group",
               "nohash_whatto_5":"Indicate which movie, which distribution and, if possible, a photo of this distribution",
               "checklist_info_1":"Make sure you run TorrServe on the device where it is installed.",
               "checklist_info_2":"A common mistake is that the IP address of your device has changed. Make sure the IP address you entered",
               "checklist_info_3":" matches the address of the device on which TorrServe is installed",
               "checklist_info_4":"To access TorrServe, you need port :8090 at the end of the address. Make sure you have a port at the end of your IP address, your current address",
               "checklist_info_5":"Frequent occurrence, antivirus or firewall can block access by IP address, try disabling antivirus and firewall.",
               "checklist_info_6":"On any other device where TorrServe is not installed, open the address in the browser",
               "checklist_info_7":"and check if response from TorrServe is available",
               "checklist_info_8":"If after all the checks it still does not work, try restarting TorrServe and the Internet adapter.",
               "checklist_info_9":"If the problem persists, write the @lampa_group group in telegram with the text (The lamp does not connect to TorrServe after all checks, the current address"
            },
            "install":{
               "trr_title":"TorrServe required",
               "trr_descr":"TorrServe is an application that allows you to view content from torrent files online.",
               "trr_label":"Telegram groups"
            },
            "item":{
               "bitrate":"Bitrate:",
               "speed":"Mb/s",
               "seeds":"Distributing:",
               "grabs":"Swing:"
            },
            "serial":{
               "series":{
                  "output":"Output"
               },
               "season":"Season"
            }
         },
         "components":{
            "menu":{
               "act_1":"Movies",
               "act_2":"Anime",
               "act_3":"TV series",
               "act_4":"Home - ",
               "about_title":"About the application",
               "fav_1":"Bookmarks",
               "fav_2":"Like",
               "fav_3":"View history",
               "fav_4":"Later",
               "timetable_title":"Schedule",
               "torrents_title":"My torrents",
               "relise_title":"Digital releases",
               "collections_title":"Collections",
               "collections_title_1":"Selections on ivi",
               "collections_title_2":"Collections on okko",
               "catalog_title":"Catalog",
               "catalog_title_1":"Catalog -"
            },
            "favorite":{
               "history_title":"Action",
               "history_title_1":"Remove from history",
               "history_subtitle_1":"Delete selected card",
               "history_title_2":"Clear the history",
               "history_subtitle_2":"Delete all cards from history",
               "history_title_3":"Clear labels",
               "history_subtitle_3":"Clear view Tags",
               "history_title_4":"Clear timecodes",
               "history_subtitle_4":"Clear all timecodes",
               "notify":"Marks cleared",
               "notify_1":"Timecodes cleared"
            },
            "full":{
               "person_1":"Director",
               "coll_title":"Collection",
               "rec_title":"Recommendations",
               "sim_title":"Similar",
               "descr":{
                  "text_1":"In detail",
                  "text_2":"No description.",
                  "text_3":"Company"
               },
               "episodes":{
                  "title_1":"Series release"
               },
               "persons":{
                  "title_1":"actors",
                  "title_2":"Person"
               },
               "reviews":{
                  "title_1":"Comments"
               },
               "start":{
                  "text_10":"No description.",
                  "text_11":"Next:",
                  "text_12":" / Days left:",
                  "text_13":"Torrents",
                  "text_14":"Official",
                  "text_15":"Informal",
                  "text_16":"Trailers",
                  "text_17":"Look"
               }
            },
            "mytorrents":{
               "title_1":"Action",
               "title_2":"Delete",
               "subtitle_1":"The torrent will be removed from your list"
            },
            "relise":{
               "notify":"The movie could not be found."
            },
            "search":{
               "find_1":"Enter text...",
               "history":{
                  "key":"Left - delete"
               },
               "results":{
                  "title_1":"Torrents",
                  "title_2":"Search -",
                  "title_3":"Error",
                  "title_4":"Requesting a magnet link"
               }
            },
            "settings":{
               "component":{
                  "notify":"Cache and data cleared"
               },
               "input":{
                  "links_1":"Add",
                  "links_2":"Delete",
                  "links_3":" present value",
                  "links_4":"For torrents, Api key is empty",
                  "links_5":"For local TorrServ",
                  "show_1":"Links",
                  "show_2":"Added (",
                  "show_3":"Removed (",
                  "show_4":"Removed (",
                  "foreach_1":"Custom link",
                  "helper_1":"After entering the value, press the (back) button to save"
               },
               "params":{
                  "inner_1":"built-in",
                  "inner_2":"built-in",
                  "inner_3":"built-in",
                  "inner_4":"built-in",
                  "trig_1":"Yes",
                  "trig_2":"No",
                  "itm_1":"Choose",
                  "isize_1":"Smaller",
                  "isize_2":"Normal",
                  "psize_1":"Small",
                  "psize_2":"Medium",
                  "psize_3":"Large",
                  "torpar_1":"Directly",
                  "torpar_2":"Through the website API",
                  "bgtyp_1":"Complicated",
                  "bgtyp_2":"Simple",
                  "bgtyp_3":"Picture",
                  "player_1":"built-in",
                  "torr_use_1":"Main link",
                  "torr_use_2":"Extra link",
                  "subtz_1":"Small",
                  "subtz_2":"Medium",
                  "subtz_3":"Large",
                  "screens_1":"Nature",
                  "screens_2":"ChromeCast",
                  "tmdb_lg_1":"Russian",
                  "tmdb_lg_2":"English",
                  "pars_lg_1":"Original",
                  "pars_lg_2":"Russian",
                  "play_tmc_1":"Start over",
                  "play_tmc_2":"Proceed",
                  "play_tmc_3":"Ask",
                  "play_scl_1":"Transform",
                  "play_scl_2":"Calculate",
                  "start_pg_1":"home",
                  "start_pg_2":"Bookmarks",
                  "start_pg_3":"Like",
                  "start_pg_4":"Later",
                  "start_pg_5":"Browsing history",
                  "start_pg_6":"My torrents",
                  "start_pg_7":"Last",
                  "card_view_1":"Lazy load",
                  "card_view_2":"Show all",
                  "nav_type_1":"Remote controller",
                  "nav_type_2":"Remote control and mouse"
               }
            },
            "timetable":{
               "empty_1":"This section will display the release dates of new episodes.",
               "weeks_arr":{
                  "0":"Sun.",
                  "1":"Mon.",
                  "2":"Tue.",
                  "3":"Wed.",
                  "4":"Read",
                  "5":"Fri.",
                  "6":"Sat"
               },
               "air_eips":"Untitled",
               "air_eleme":"</b><br>Episode - <b>",
               "modal_medium":"TV series"
            },
            "torrents":{
               "details_1":"The average:",
               "details_2":"Minimum:",
               "details_3":"Maximum:",
               "details_4":"Requests:",
               "quality_arr":{
                  "0":"Any",
                  "1":"4k",
                  "2":"1080p",
                  "3":"720p"
               },
               "hdr_arr":{
                  "0":"Not chosen",
                  "1":"Yes",
                  "2":"No"
               },
               "sub_arr":{
                  "0":"Not chosen",
                  "1":"Yes",
                  "2":"No"
               },
               "tracker":"Any",
               "year":"Any",
               "filter_quality":"Quality",
               "filter_hdr":"HDR",
               "filter_sub":"Subtitles",
               "filter_voice":"Translation",
               "filter_tracker":"tracker",
               "filter_year":"Year",
               "sortt_seeders":"By distributors",
               "sortt_size":"To size",
               "sortt_title":"by name",
               "sortt_tracker":"By source",
               "sortt_publisti":"By date",
               "sortt_viewed":"Viewed",
               "empty":"Answer:",
               "buildsort_seeders":"By distributors",
               "buildsort_size":"To size",
               "buildsort_title":"by name",
               "buildsort_tracker":"By source",
               "buildsort_publisti":"By date",
               "buildsort_viewed":"Viewed",
               "filter_voice_arr":{
                  "0":"Any",
                  "1":"dubbing",
                  "2":"polyphonic",
                  "3":"two-voiced",
                  "4":"Amateur"
               },
               "t_filter_1":"Reset filter",
               "filter1_quality":"Quality",
               "filter1_hdr":"HDR",
               "filter1_sub":"Subtitles",
               "filter1_voice":"Translation",
               "filter1_tracker":"tracker",
               "filter1_year":"Year",
               "result_show":"Failed to get results",
               "pending_m":"Requesting a magnet link",
               "movie_title":" - added to my torrents",
               "select_show_1":"Action",
               "select_show_2":"Add to my torrents",
               "select_show_3":"Flag",
               "select_show_4":"Flag a hand with a flag (viewed)",
               "select_show_5":"Uncheck",
               "select_show_6":"Remove the mark from the distribution (viewed)",
               "helper_1":"Hold down the (OK) key to bring up the context menu"
            },
            "collections":{
               "title_10":"Collections -"
            },
            "person":{
               "movie_title":"Movies",
               "tv_title":"TV series"
            }
         },
         "interaction":{
            "activity":{
               "start_pg_1":"Home - ",
               "book":"Bookmarks",
               "like":"Like",
               "history":"Browsing history",
               "history_2":"Later",
               "mytorrents_1":"My torrents"
            },
            "api":{
               "title_1":"Parser"
            },
            "broadcast":{
               "card_1":"Open card on another device",
               "card_2":"Choose the device to watch on"
            },
            "card":{
               "view_1":"New series",
               "title_1":"Action",
               "title_2":"Remove from bookmarks",
               "title_3":"To bookmarks",
               "title_4":"Look in the menu (Bookmarks)",
               "title_5":"Remove from favorites",
               "title_6":"Like",
               "title_7":"Look at the menu (Like)",
               "title_8":"Remove from expected",
               "title_9":"Watch Later",
               "title_10":"See the menu (Later)"
            },
            "content_filter":{
               "title_10":"Type",
               "title_11":"Films",
               "title_12":"cartoons",
               "title_13":"TV series",
               "title_14":"Animated series",
               "title_15":"Anime",
               "title_16":"Rating",
               "title_17":"Any",
               "title_18":"from 1 to 3",
               "title_19":"from 3 to 6",
               "title_20":"from 6 to 8",
               "title_21":"from 8 to 9",
               "title_22":"Country",
               "title_23":"Ukraine",
               "title_24":"USA",
               "title_25":"Russia",
               "title_26":"Japan",
               "title_27":"Korea",
               "title_28":"Azerbaijan",
               "title_29":"Albania",
               "title_30":"Belarus",
               "title_31":"Bulgaria",
               "title_32":"Germany",
               "title_33":"Georgia",
               "title_34":"Denmark",
               "title_35":"Estonia",
               "title_36":"Ireland",
               "title_37":"Spain",
               "title_38":"Italy",
               "title_39":"China",
               "title_40":"Latvia",
               "title_41":"Nepal",
               "title_42":"Norway",
               "title_43":"Poland",
               "title_44":"Romania",
               "title_45":"Serbia",
               "title_46":"Slovakia",
               "title_47":"Slovenia",
               "title_48":"Tajikistan",
               "title_49":"Turkey",
               "title_50":"Uzbekistan",
               "title_51":"Finland",
               "title_52":"France",
               "title_53":"Croatia",
               "title_54":"Czech Republic",
               "title_55":"Sweden",
               "title_56":"Estonia",
               "title_57":"Genre",
               "title_100":"action movie",
               "title_101":"adventures",
               "title_102":"cartoon",
               "title_103":"comedy",
               "title_104":"crime",
               "title_105":"documentary",
               "title_106":"drama",
               "title_107":"family",
               "title_108":"fantasy",
               "title_109":"history",
               "title_110":"horror",
               "title_111":"music",
               "title_112":"detective",
               "title_113":"melodrama",
               "title_114":"fiction",
               "title_115":"TV movie",
               "title_116":"thriller",
               "title_117":"military",
               "title_118":"western",
               "title_58":"Year",
               "title_59":"Any",
               "title_200":"Not chosen",
               "title_60":"Start search selection",
               "title_61":"Filter",
               "title_62":"Filter",
               "title_150":"of 8",
               "title_151":"of 6",
               "title_152":"of 4",
               "title_153":"from 2",
               "title_201":"Cartoon",
               "title_202":"Comedy",
               "title_203":"Crime",
               "title_204":"Documentary",
               "title_205":"Drama",
               "title_206":"Family",
               "title_207":"Children's",
               "title_208":"Detective",
               "title_209":"news",
               "title_210":"Reality show",
               "title_211":"Sci-Fi and Fantasy",
               "title_212":"Soap opera",
               "title_213":"Talk show",
               "title_214":"War and Politics",
               "title_215":"Western"
            },
            "empty":{
               "title":"It's empty here",
               "descr":"The list is currently empty."
            },
            "filter":{
               "empty_1":"Refine Search",
               "search_1":"Specify title",
               "title_1":"Specify",
               "find_1":"Sort",
               "find_2":"Filter"
            },
            "info":{
               "title_1":"More",
               "title_2":"Show more results"
            },
            "items":{
               "button_1":"More",
               "line_title":"Category"
            },
            "keyboard":{
               "rus":"Russian",
               "search":"to find",
               "noty_1":"Speak, I'm listening..",
               "noty_2":"No microphone access"
            },
            "notice":{
               "title_31":"Weekly",
               "descr_31":"- New feature, popular torrents that are most often watched (test mode)<br>- Added catalog of plug-ins for quick installation.<br>- Broadcasting the card to other devices on the network.<br>- Checklist for checking the operation of TorrServe<br>- Copying links to videos from torrents.<br>- Added long click for mice and wheelbarrows.<br>- Collections appeared in the cards.<br>- Added notifications about the release of the movie in better quality.",
               "title_30":"Update 1.3.7",
               "descr_30":"1. Added voice search.<br>2. Fixed mouse bugs and added mouse support in the player.<br>3. Added account binding to CUB.<br>4. All sorts of other uninteresting little things.",
               "title_29":"Update 1.3.6",
               "descr_29":"1. Added new catalog CUB.<br>2. Release source changed, now it works even in MSX.<br>3. Added anime category ;)",
               "title_28":"Update 1.3.5",
               "descr_28":"1. Added screensaver from Google ChromeCast.<br>2. Releases run immediately without searching for .<br>3. The enter button has been removed from the keyboard.<br>4. The player has improved rewinding and added buttons (to the end / to the beginning).<br>5. Added synchronization via gist.github.com service.",
               "title_27":"Update 1.3.4",
               "descr_27":"1. Fixed timestamp when disabled property (continue from last place).<br>2. On samsung TVs fixed black dice in the player.<br>3. Added plugins in settings.",
               "title_26":"Update 1.3.3",
               "descr_26":"1. Added search by torrents.<br>2. Fixed loading main with selected source.<br>3. Added multiple selection in the filter.<br>4. Added more choices for video scaling.<br>5. Fixed other little things.",
               "title_25":"Update 1.3.2",
               "descr_25":"1. Fixed card search, each card has its own source (tmdb,ivi,okko)<br>2. Possibility to switch source to (tmdb,ivi,okko).<br>3. Updated background work.<br>4. Added scrolling in torrent files, scrolls left or right by 10 positions.<br>5. Changed NCR source.<br>6. Fixed browsing history, now a card is added if you start watching a video.<br>7. Added comments in ivi source.",
               "title_24":"Update 1.3.1",
               "descr_24":"1. Added collections with ivi and okko<br>2. Returned the ability to change the scale of the video.<br>3. Added digital releases, does not work in MSX.<br>4. In what language to display data TMDB.<br>5. In the screensaver added the ability to switch to nature.<br>6. Possibility to choose in what language to find torrents.<br>7. Ability to disable continue on timecode.",
               "title_23":"Screensaver",
               "descr_23":"Added screensaver, starts after 5 minutes if nothing is done.",
               "title_22":"Update 1.2.6",
               "descr_22":"1. Fixed torrent deletion error.<br>2. Fixed timestamp.<br>3. Added a visual for series, in torrent files you can see the series better.<br>4. Other little things.",
               "title_21":"Good to know",
               "descr_21":"Did you know? That if you hold down the (OK) button on the card for a long time, you can call up the menu for adding to bookmarks. The same method works on torrents, a long tap allows you to add a distribution to the list (My torrents)",
               "title_20":"Update 1.2.4",
               "descr_20":"1. Added menu (My torrents).<br>2. Updated filter and sorting in torrents.<br>3. Added tape (New) in movies and TV shows.<br>4. Fixed links for Torserver.<br>5. Added watch mark for serials.<br>6. Fixed several bugs and errors.",
               "title_19":"Update 1.2.3",
               "descr_19":"1. Mouse support added.<br>2. View position memory added (Movies)<br>3. Fixed a bug in the player with partially closed tiles.<br>4. Added additional link to Torserver<br>5. Viewed torrent mark<br>6. Added transition from torrent to movie card",
               "title_18":"Update 1.2.2",
               "descr_18":"1. Added Tizen player<br>2. Added webOS player<br>3. Added torrent download statistics to the player.<br>4. Added rewind bar in player<br>5. Fixed empty posters for Torserver<br>6. Fixed other minor bugs and bugs",
               "title_17":"Update 1.2.1",
               "descr_17":"1. Fixed bug with back button in MSX<br>2. Fixed bug with search<br>3. Added filter in torrents<br>4. Visually improved player<br>5. Added performance settings<br>6. Fixed names in torrent files<br>7. Fixed bug with pause in player<br>8. Fixed other minor bugs and bugs",
               "title_16":"Update 1.0.10",
               "descr_16":"1. Improved loading of cards in small mode<br>2. Added logs, to view the logs hover over the header and click up 10 times",
               "title_15":"Update 1.0.9",
               "descr_15":"1. Improved background in bookmarks and in movie<br>2. Changed instructions<br>3. Completed plugin for Orsay",
               "title_14":"Update 1.0.8",
               "descr_14":"1. Improved background<br>2. The button (Torrents)<br>3 is displayed. Added sorting of torrents<br>4. Finished output for Tizen and WebOS<br> 5. Maybe finished control buttons for Orsay",
               "title_13":"Update 1.0.7",
               "descr_13":"1. Optimized main page and catalogs<br>2. Added authorization for TorServer<br> 3. Added error hints to TorServer",
               "title_12":"Fixes",
               "descr_12":"1. Bug fixed (Unable to get HASH)<br>2. Completed parser for MSX, now you do not need to specify an explicit link, only if you wish<br> 3. Improved jac.red parser, now searches more accurately",
               "title_11":"Fixed parser",
               "descr_11":"A bug was found in the parser due to which jac.red did not produce results",
               "title_10":"Welcome!",
               "descr_10":"This is your first time running the app, we hope you enjoy it. Happy viewing.",
               "descr_100":"New quality available<br><br>Quality - <b>",
               "descr_101":"New Series<br><br>Season - <b>",
               "descr_102":"</b><br>Episode - <b>",
               "title_105":"Notifications"
            },
            "player":{
               "title_1":"Action",
               "title_2":"Continue browsing from",
               "title_3":"No",
               "info":{
                  "ele_size":"Loading..."
               },
               "panel":{
                  "title_1":"Quality",
                  "title_121":"unknown",
                  "title_120":"Channels:",
                  "title_119":"Type:",
                  "title_118":"Audio tracks",
                  "title_117":"Disabled",
                  "title_116":"unknown",
                  "title_115":"Subtitles",
                  "title_114":"Default",
                  "title_113":"Default video size",
                  "title_112":"Expand",
                  "title_111":"Expands video to full screen",
                  "title_110":"Fill",
                  "title_109":"Fit video to full screen",
                  "title_108":"Zoom 115%",
                  "title_107":"Enlarge video by 115%",
                  "title_106":"Zoom 130%",
                  "title_105":"Enlarge video by 130%",
                  "title_104":"Vertical 115%",
                  "title_103":"Enlarge video by 115%",
                  "title_102":"Vertical 130%",
                  "title_101":"Enlarge video by 130%",
                  "title_100":"Video size"
               },
               "playlist":{
                  "title_1":"Playlist"
               },
               "video":{
                  "error_1":"Failed to decode video",
                  "error_2":"Video not found or corrupted"
               },
               "webos":{
                  "title_1":"Disable",
                  "title_2":"Disable"
               }
            },
            "search":{
               "find_1":"Enter text..."
            },
            "template":{
               "throw_1":"Template:",
               "throw_2":" not found!"
            },
            "timeline":{
               "hours":"h.",
               "minutes":"m."
            },
            "torrent":{
               "tip_title":"Mistake",
               "tip_text":"Failed to connect to TorrServer",
               "tip2_title":"Mistake",
               "tip3_title":"Mistake",
               "menu_title_1":"Reset timecode",
               "menu_title_2":"Launch player - Webos",
               "menu_title_3":"Launch Player - Android",
               "menu_title_4":"Launch player - Lampa",
               "menu_title_5":"Copy video link",
               "menu_title_6":"Action",
               "noty_1":"Link copied to clipboard",
               "noty_2":"Error copying link",
               "temp_error_1":"empty",
               "temp_error_2":"Failed to extract suitable files",
               "modal_title_1":"Files",
               "helper_1":"To reset the timecode and call up the menu, hold down the (OK) key"
            },
            "torrserver":{
               "fail_network":"Failed to verify Matrix version",
               "makestep":"Done ",
               "makestep_1":" of ",
               "modify_1":"Further",
               "modify_2":"To complete",
               "modal_title":"Connection error"
            },
            "helper":{
               "noty_1":"Successful, tips will be shown again"
            }
         },
         "app":{
            "title_exit":"Quit",
            "title_exit_1":"Yes, get out",
            "title_exit_2":"Don't exit",
            "book":"Bookmarks",
            "like":"Like",
            "history":"Browsing history",
            "history_1":"Later"
         }
      }
   },
   "ru":{
      "translation":{
         "head":{
            "title":"Lampa",
            "description":""
         },
         "components":{
            "collections":{
               "title_10":"Подборки - "
            },
            "favorite":{
               "history_title":"Действие",
               "history_title_1":"Удалить из истории",
               "history_subtitle_1":"Удалить выделенную карточку",
               "history_title_2":"Очистить историю",
               "history_subtitle_2":"Удалить все карточки из истории",
               "history_title_3":"Очистить метки",
               "history_subtitle_3":"Очистить метки о просмотрах",
               "history_title_4":"Очистить таймкоды",
               "history_subtitle_4":"Очистить все таймкоды",
               "notify":"Отметки очищены",
               "notify_1":"Таймкоды очищены"
            },
            "full":{
               "person_1":"Режиссер",
               "coll_title":"Коллекция",
               "rec_title":"Рекомендации",
               "sim_title":"Похожие",
               "descr":{
                  "text_1":"Подробно",
                  "text_2":"Без описания.",
                  "text_3":"Компания"
               },
               "episodes":{
                  "title_1":"Выход серий"
               },
               "persons":{
                  "title_1":"Актеры",
                  "title_2":"Персона"
               },
               "reviews":{
                  "title_1":"Коментарии"
               },
               "start":{
                  "text_10":"Без описания.",
                  "text_11":"Следующая: ",
                  "text_12":" / Осталось дней: ",
                  "text_13":"Торренты",
                  "text_14":"Официальный",
                  "text_15":"Неофициальный",
                  "text_16":"Трейлеры",
                  "text_17":"Смотреть"
               }
            },
            "menu":{
               "act_1":"Фильмы",
               "act_2":"Аниме",
               "act_3":"Сериалы",
               "act_4":"Главная - ",
               "about_title":"О приложении",
               "fav_1":"Закладки",
               "fav_2":"Нравится",
               "fav_3":"История просмотров",
               "fav_4":"Позже",
               "timetable_title":"Расписание",
               "torrents_title":"Мои торренты",
               "relise_title":"Цифровые релизы",
               "collections_title":"Подборки",
               "collections_title_1":"Подборки на ivi",
               "collections_title_2":"Подборки на okko",
               "catalog_title":"Каталог",
               "catalog_title_1":"Каталог - "
            },
            "mytorrents":{
               "title_1":"Действие",
               "title_2":"Удалить",
               "subtitle_1":"Торрент будет удален из вашего списка"
            },
            "person":{
               "movie_title":"Фильмы",
               "tv_title":"Сериалы"
            },
            "relise":{
               "notify":"Не удалось найти фильм."
            },
            "search":{
               "find_1":"Введите текст...",
               "history":{
                  "key":"Влево - удалить"
               },
               "results":{
                  "title_1":"Торренты",
                  "title_2":"Поиск - ",
                  "title_3":"Ошибка",
                  "title_4":"Запрашиваю magnet ссылку"
               }
            },
            "settings":{
               "component":{
                  "notify":"Кеш и данные очищены"
               },
               "input":{
                  "links_1":"Добавить",
                  "links_2":"Удалить",
                  "links_3":" текущее значение",
                  "foreach_1":"Пользовательская ссылка",
                  "links_4":"Для торрентов, Api ключ - пустой",
                  "links_5":"Для локального TorrServ",
                  "show_1":"Ссылки",
                  "show_2":"Добавлено (",
                  "show_3":"Удалено (",
                  "show_4":"Удалено (",
                  "helper_1":"После ввода значения, нажмите кнопку (назад) для сохранения"
               },
               "params":{
                  "inner_1":"Встроенный",
                  "inner_2":"Встроенный",
                  "inner_3":"Встроенный",
                  "inner_4":"Встроенный",
                  "trig_1":"Да",
                  "trig_2":"Нет",
                  "itm_1":"Выбрать",
                  "isize_1":"Меньше",
                  "isize_2":"Нормальный",
                  "psize_1":"Низкое",
                  "psize_2":"Среднее",
                  "psize_3":"Высокое",
                  "torpar_1":"Напрямую",
                  "torpar_2":"Через API сайта",
                  "bgtyp_1":"Сложный",
                  "bgtyp_2":"Простой",
                  "bgtyp_3":"Картинка",
                  "player_1":"Встроенный",
                  "torr_use_1":"Основную",
                  "torr_use_2":"Дополнительную",
                  "subtz_1":"Маленькие",
                  "subtz_2":"Обычные",
                  "subtz_3":"Большие",
                  "screens_1":"Природа",
                  "screens_2":"ChromeCast",
                  "tmdb_lg_1":"Русский",
                  "tmdb_lg_2":"Английский",
                  "pars_lg_1":"Оригинал",
                  "pars_lg_2":"Русский",
                  "play_tmc_1":"Начать с начала",
                  "play_tmc_2":"Продолжить",
                  "play_tmc_3":"Спрашивать",
                  "play_scl_1":"Transform",
                  "play_scl_2":"Рассчитать",
                  "start_pg_1":"Главная",
                  "start_pg_2":"Закладки",
                  "start_pg_3":"Нравится",
                  "start_pg_4":"Позже",
                  "start_pg_5":"История просмотров",
                  "start_pg_6":"Мои торренты",
                  "start_pg_7":"Последняя",
                  "card_view_1":"Подгружать",
                  "card_view_2":"Показать все",
                  "nav_type_1":"Пульт",
                  "nav_type_2":"Пульт с мышкой"
               }
            },
            "timetable":{
               "empty_1":"В этом разделе будут отображаться даты выхода новых серий",
               "weeks_arr":{
                  "0":"Вс",
                  "1":"Пн",
                  "2":"Вт",
                  "3":"Ср",
                  "4":"Чт",
                  "5":"Пт",
                  "6":"Сб"
               },
               "air_eips":"Без названия",
               "air_eleme":"</b><br>Эпизод - <b>",
               "modal_medium":"Сериалы"
            },
            "torrents":{
               "details_1":"Среднее:",
               "details_2":"Минимальное:",
               "details_3":"Максимальное:",
               "details_4":"Запросов:",
               "quality_arr":{
                  "0":"Любое",
                  "1":"4k",
                  "2":"1080p",
                  "3":"720p"
               },
               "hdr_arr":{
                  "0":"Не выбрано",
                  "1":"Да",
                  "2":"Нет"
               },
               "sub_arr":{
                  "0":"Не выбрано",
                  "1":"Да",
                  "2":"Нет"
               },
               "tracker":"Любой",
               "year":"Любой",
               "filter_quality":"Качество",
               "filter_hdr":"HDR",
               "filter_sub":"Субтитры",
               "filter_voice":"Перевод",
               "filter_tracker":"Трекер",
               "filter_year":"Год",
               "sortt_seeders":"По раздающим",
               "sortt_size":"По размеру",
               "sortt_title":"По названию",
               "sortt_tracker":"По источнику",
               "sortt_publisti":"По дате",
               "sortt_viewed":"По просмотренным",
               "empty":"Ответ: ",
               "buildsort_seeders":"По раздающим",
               "buildsort_size":"По размеру",
               "buildsort_title":"По названию",
               "buildsort_tracker":"По источнику",
               "buildsort_publisti":"По дате",
               "buildsort_viewed":"По просмотренным",
               "filter_voice_arr":{
                  "0":"Любой",
                  "1":"Дубляж",
                  "2":"Многоголосый",
                  "3":"Двухголосый",
                  "4":"Любительский"
               },
               "t_filter_1":"Сбросить фильтр",
               "filter1_quality":"Качество",
               "filter1_hdr":"HDR",
               "filter1_sub":"Субтитры",
               "filter1_voice":"Перевод",
               "filter1_tracker":"Трекер",
               "filter1_year":"Год",
               "result_show":"Не удалось получить результатов",
               "pending_m":"Запрашиваю magnet ссылку",
               "movie_title":" - добавлено в мои торренты",
               "helper_1":"Удерживайте клавишу (ОК) для вызова контекстного меню",
               "select_show_1":"Действие",
               "select_show_2":"Добавить в мои торренты",
               "select_show_3":"Пометить",
               "select_show_4":"Пометить раздачу с флагом (просмотрено)",
               "select_show_5":"Снять отметку",
               "select_show_6":"Снять отметку с раздачи (просмотрено)"
            }
         },
         "interaction":{
            "activity":{
               "book":"Закладки",
               "like":"Нравится",
               "history":"История просмотров",
               "history_2":"Позже",
               "mytorrents_1":"Мои торренты",
               "start_pg_1":"Главная - "
            },
            "api":{
               "title_1":"Парсер"
            },
            "broadcast":{
               "card_1":"Открыть карточку на другом устройстве",
               "card_2":"Выберите устройство на котором смотреть"
            },
            "card":{
               "view_1":"Новая серия",
               "title_1":"Действие",
               "title_2":"Убрать из закладок",
               "title_3":"В закладки",
               "title_4":"Смотрите в меню (Закладки)",
               "title_5":"Убрать из понравившихся",
               "title_6":"Нравится",
               "title_7":"Смотрите в меню (Нравится)",
               "title_8":"Убрать из ожидаемых",
               "title_9":"Смотреть позже",
               "title_10":"Смотрите в меню (Позже)"
            },
            "content_filter":{
               "title_10":"Тип",
               "title_11":"Фильмы",
               "title_12":"Мультфильмы",
               "title_13":"Сериалы",
               "title_14":"Мультсериалы",
               "title_15":"Аниме",
               "title_16":"Рейтинг",
               "title_17":"Любой",
               "title_18":"от 1 до 3",
               "title_19":"от 3 до 6",
               "title_20":"от 6 до 8",
               "title_21":"от 8 до 9",
               "title_150":"от 8",
               "title_151":"от 6",
               "title_152":"от 4",
               "title_153":"от 2",
               "title_22":"Страна",
               "title_23":"Украина",
               "title_24":"США",
               "title_25":"Россия",
               "title_26":"Япония",
               "title_27":"Корея",
               "title_28":"Азербайджан",
               "title_29":"Албания",
               "title_30":"Беларусь",
               "title_31":"Болгария",
               "title_32":"Германия",
               "title_33":"Грузия",
               "title_34":"Дания",
               "title_35":"Естония",
               "title_36":"Ирландия",
               "title_37":"Испания",
               "title_38":"Италия",
               "title_39":"Китай",
               "title_40":"Латвия",
               "title_41":"Непал",
               "title_42":"Норвегия",
               "title_43":"Польша",
               "title_44":"Румуния",
               "title_45":"Сербия",
               "title_46":"Словакия",
               "title_47":"Словения",
               "title_48":"Таджикистан",
               "title_49":"Турция",
               "title_50":"Узбекистан",
               "title_51":"Финляндия",
               "title_52":"Франция",
               "title_53":"Хорватия",
               "title_54":"Чешская Республика",
               "title_55":"Швеция",
               "title_56":"Эстония",
               "title_57":"Жанр",
               "title_100":"боевик",
               "title_101":"приключения",
               "title_102":"мультфильм",
               "title_103":"комедия",
               "title_104":"криминал",
               "title_105":"документальный",
               "title_106":"драма",
               "title_107":"семейный",
               "title_108":"фэнтези",
               "title_109":"история",
               "title_110":"ужасы",
               "title_111":"музыка",
               "title_112":"детектив",
               "title_113":"мелодрама",
               "title_114":"фантастика",
               "title_115":"телевизионный фильм",
               "title_116":"триллер",
               "title_117":"военный",
               "title_118":"вестерн",
               "title_200":"Боевик и Приключения",
               "title_201":"Мультфильм",
               "title_202":"Комедия",
               "title_203":"Криминал",
               "title_204":"Документальный",
               "title_205":"Драма",
               "title_206":"Семейный",
               "title_207":"Детский",
               "title_208":"Детектив",
               "title_209":"Новости",
               "title_210":"Реалити-шоу",
               "title_211":"НФ и Фэнтези",
               "title_212":"Мыльная опера",
               "title_213":"Ток-шоу",
               "title_214":"Война и Политика",
               "title_215":"Вестерн",
               "title_58":"Год",
               "title_59":"Любой",
               "title_60":"Начать поиск",
               "title_61":"Фильтр",
               "title_62":"Фильтр"
            },
            "empty":{
               "title":"Здесь пусто",
               "descr":"На данный момент список пустой"
            },
            "filter":{
               "empty_1":"Уточнить поиск",
               "search_1":"Указать название",
               "title_1":"Уточнить",
               "find_1":"Сортировать",
               "find_2":"Фильтр"
            },
            "helper":{
               "noty_1":"Успешно, подсказки будут показаны по новой"
            },
            "info":{
               "title_1":"Еще",
               "title_2":"Показать больше результатов"
            },
            "items":{
               "button_1":"Еще",
               "line_title":"Категория"
            },
            "keyboard":{
               "rus":"русский",
               "search":"найти",
               "noty_1":"Говорите, я слушаю..",
               "noty_2":"Нет доступа к микрофону"
            },
            "notice":{
               "title_31":"Еженедельник",
               "descr_31":"- Новая фишка, популярные торренты которые чаше всего смотрят (тестовый режим)<br>- Добавлен каталог плагинов для быстрой установки.<br>- Трансляция карточки на другие устройства в сети.<br>- Чек лист для проверки работы TorrServe<br>- Копирование ссылки на видео из торрентов.<br>- Доделан лонг клик для мышей и тача.<br>- В карточках появились коллекции.<br>- Добавлены уведомления о выходе фильма в лучшем качестве.",
               "title_30":"Обновление 1.3.7",
               "descr_30":"1. Добавлен голосовой поиск.<br>2. Устранены баги с мышкой и добавлена поддержка мыши в плеере.<br>3. Добавлена привязка аккаунта к CUB.<br>4. Всякие другие не интересные мелочи.",
               "title_29":"Обновление 1.3.6",
               "descr_29":"1. Добавлен новый каталог CUB.<br>2. Изменен источник релизов, теперь работает даже в MSX.<br>3. Добавлена категория аниме ;)",
               "title_28":"Обновление 1.3.5",
               "descr_28":"1. Добавлен скринсейвер от Google ChromeCast.<br>2. Релизы запускаются сразу же без поиска .<br>3. В клавиатуре убрана кнопка ввода.<br>4. В плеере улучшена перемотка и добавлены кнопки (в конец / в начало).<br>5. Добавлена синхронизация через сервис gist.github.com.",
               "title_27":"Обновление 1.3.4",
               "descr_27":"1. Исправлена отметка времени при выключенном свойстве (продолжить с последнего места).<br>2. На телеках самсунг исправлены плашки черного цвета в плеере.<br>3. Добавлены плагины в настройках.",
               "title_26":"Обновление 1.3.3",
               "descr_26":"1. Добавлен поиск по торрентам.<br>2. Исправлена загрузка главной с выбранным источником.<br>3. Добавлен множественный выбор в фильтре.<br>4. Добавлено больше выбора для масштабирования видео.<br>5. Исправлены другие мелочи.",
               "title_25":"Обновление 1.3.2",
               "descr_25":"1. Исправлен поиск карточки, каждая карточка имеет свой источник (tmdb,ivi,okko)<br>2. Возможность переключить источник на (tmdb,ivi,okko).<br>3. Обновлена работа фона.<br>4. Добавлено перелистывание в торрент файлах, влево или вправо перелистывает на 10 позиций.<br>5. Изменен источник НЦР.<br>6. Исправлена история просмотров, теперь карточка добавляется если начали просмотр видео.<br>7. Добавлены комментарии в источнике ivi.",
               "title_24":"Обновление 1.3.1",
               "descr_24":"1. Добавлены подборки с ivi и okko<br>2. Вернул возможность изменения масштаба видео.<br>3. Добавлены цифровые релизы, в MSX не работает.<br>4. На каком языке выводить данные TMDB.<br>5. В скринсейвер добавлена возможно переключить на природу.<br>6. Возможность выбрать на каком языке находить торренты.<br>7. Возможность отключить продолжить по таймкоду.",
               "title_23":"Скринсейвер",
               "descr_23":"Добавлен скринсейвер, запускается через 5 минут, если ничего не делать.",
               "title_22":"Обновление 1.2.6",
               "descr_22":"1. Исправлена ошибка удаления торрента.<br>2. Исправлена отметка времени.<br>3. Добавлен визуал для сериалов, в торрент-файлах лучше видно серии.<br>4. Другие мелочи.",
               "title_21":"Полезно знать",
               "descr_21":"А вы знали? Что если долго удерживать кнопку (OK) на карточке, то можно вызвать меню для добавления в закладки. Такой же метод работает и на торрентах, долгий тап позволяет добавить раздачу в список (Мои торренты)",
               "title_20":"Обновление 1.2.4",
               "descr_20":"1. Добавлено меню (Мои торренты).<br>2. Обновлен фильтр и сортировка в торрентах.<br>3. Добавлена лента (Новинки) в фильмах и сериалах.<br>4. Исправлены ссылки для Torserver.<br>5. Добавлена отметка просмотра для сериалов.<br>6. Исправлено несколько багов и ошибок.",
               "title_19":"Обновление 1.2.3",
               "descr_19":"1. Добавлена поддержка мыши.<br>2. Добавлено запоминание позиции просмотра (Фильмы)<br>3. Исправлен баг в плеере с недоконца закрытыми плашками.<br>4. Добавлена дополнительная ссылка на Torserver<br>5. Отметка просмотренного торрента<br>6. Добавлен переход с торрента на карточку фильма",
               "title_18":"Обновление 1.2.2",
               "descr_18":"1. Добавлен Tizen плеер<br>2. Добавлен WebOS плеер<br>3. В плеере добавлена статистика загрузки торрента.<br>4. Добавлена полоса перемотки в плеере<br>5. Исправлено пустые постеры для Torserver<br>6. Исправлены другие мелкие ошибки и баги",
               "title_17":"Обновление 1.2.1",
               "descr_17":"1. Исправлен баг с кнопкой назад в MSX<br>2. Исправлен баг с поиском<br>3. Добавлен фильтр в торрентах<br>4. Визуально доработан плеер<br>5. Добавлены настройки быстродействия<br>6. Исправлены имена в торрент-файлах<br>7. Исправлен баг с паузой в плеере<br>8. Исправлены другие мелкие ошибки и баги",
               "title_16":"Обновление 1.0.10",
               "descr_16":"1. Доработана подгрузка карточек в мелком режиме<br>2. Добавлены логи, для просмотра логов наведите на шапку и щелкайте вверх 10 раз",
               "title_15":"Обновление 1.0.9",
               "descr_15":"1. Доработан фон в закладках и в фильме<br>2. Изменены инструкции<br>3. Доделан плагин под Orsay",
               "title_14":"Обновление 1.0.8",
               "descr_14":"1. Доработан фон<br>2. Выведена кнопка (Торренты)<br>3. Добавлена сортировка торрентов<br>4. Доделан выход под Tizen и WebOS<br> 5. Возможно доделаны кнопки управления под Orsay",
               "title_13":"Обновление 1.0.7",
               "descr_13":"1. Оптимизирована главная страница и каталоги<br>2. Добавлена авторизация для TorServer<br> 3. Добавлены подсказки ошибок в TorServer",
               "title_12":"Исправления",
               "descr_12":"1. Исправлена ошибка (Невозможно получить HASH)<br>2. Доделан парсер для MSX, теперь не нужно указывать явную ссылку, только по желанию<br> 3. Улучшен парсер jac.red, теперь точнее ищет",
               "title_11":"Исправлен парсер",
               "descr_11":"В парсере была выявлена ошибка, из за которой jac.red не выдавал результаты",
               "title_10":"Добро пожаловать!",
               "descr_10":"Это ваш первый запуск приложения, надеемся вам очень понравится. Приятного вам просмотра.",
               "descr_100":"Доступно новое качество<br><br>Качество - <b>",
               "descr_101":"Новая серия<br><br>Cезон - <b>",
               "descr_102":"</b><br>Эпизод - <b>",
               "title_105":"Уведомления"
            },
            "player":{
               "title_1":"Действие",
               "title_2":"Продолжить просмотр с ",
               "title_3":"Нет",
               "info":{
                  "ele_size":"Загрузка..."
               },
               "panel":{
                  "title_1":"Качество",
                  "title_121":"Неизвестно",
                  "title_120":"Каналов: ",
                  "title_119":"Тип: ",
                  "title_118":"Аудиодорожки",
                  "title_117":"Отключено",
                  "title_116":"Неизвестно",
                  "title_115":"Субтитры",
                  "title_114":"По умолчанию",
                  "title_113":"Размер видео по умолчанию",
                  "title_112":"Расширить",
                  "title_111":"Расширяет видео на весь экран",
                  "title_110":"Заполнить",
                  "title_109":"Вместить видео на весь экран",
                  "title_108":"Увеличить 115%",
                  "title_107":"Увеличить видео на 115%",
                  "title_106":"Увеличить 130%",
                  "title_105":"Увеличить видео на 130%",
                  "title_104":"По вертикали 115%",
                  "title_103":"Увеличить видео на 115%",
                  "title_102":"По вертикали 130%",
                  "title_101":"Увеличить видео на 130%",
                  "title_100":"Размер видео"
               },
               "playlist":{
                  "title_1":"Плейлист"
               },
               "video":{
                  "error_1":"Не удалось декодировать видео",
                  "error_2":"Видео не найдено или повреждено"
               },
               "webos":{
                  "title_1":"Отключить",
                  "title_2":"Отключить"
               }
            },
            "search":{
               "find_1":"Введите текст..."
            },
            "template":{
               "throw_1":"Шаблон: ",
               "throw_2":" не найден!"
            },
            "timeline":{
               "hours":"ч. ",
               "minutes":"м."
            },
            "torrent":{
               "tip2_title":"Ошибка",
               "tip3_title":"Ошибка",
               "menu_title_1":"Сбросить таймкод",
               "menu_title_2":"Запустить плеер - Webos",
               "menu_title_3":"Запустить плеер - Android",
               "menu_title_4":"Запустить плеер - Lampa",
               "menu_title_5":"Копировать ссылку на видео",
               "menu_title_6":"Действие",
               "noty_1":"Ссылка скопирована в буфер обмена",
               "noty_2":"Ошибка при копирование ссылки",
               "helper_1":"Для сброса таймкода и вызова меню, удерживайте клавишу (ОК)",
               "temp_error_1":"Пусто",
               "temp_error_2":"Не удалось извлечь подходящие файлы",
               "modal_title_1":"Файлы"
            },
            "torrserver":{
               "fail_network":"Не удалось подтвердить версию Matrix",
               "makestep":"Выполнено ",
               "makestep_1":" из ",
               "modify_1":"Далее",
               "modify_2":"Завершить",
               "modal_title":"Ошибка подключения"
            }
         },
         "about":{
            "desc":"Приложение полностью бесплатное и использует публичные ссылки для получения информации о видео, новинках, популярных фильмах и т.д. Вся доступная информация используется исключительно в познавательных целях, приложение не использует свои собственные серверы для распространения информации.",
            "contact":"Наш канал",
            "group":"Группа",
            "version":"Версия",
            "donate":"Донат",
            "translation":"переводчик"
         },
         "card_parser":{
            "handing_out":"Раздают: ",
            "pumping":"Качают: "
         },
         "company":{
            "headquarters":"Штаб:",
            "site":"Сайт:",
            "side":"Страна:"
         },
         "filter":{
            "specify":"Уточнить",
            "sort":"Сортировать",
            "filter":"Фильтр"
         },
         "full":{
            "descr":{
               "name_genres":"Жанр",
               "name_companies":"Производство",
               "name_relise":"Дата релиза",
               "name_budget":"Бюджет",
               "name_countries":"Страны"
            },
            "review":{
               "footer":"Нравится:"
            },
            "start":{
               "torrents":"Торренты",
               "trailers":"Трейлеры"
            }
         },
         "list_empty":{
            "title":"Пусто",
            "descr":"По вашему фильтру ничего не нашлось, уточните фильтр."
         },
         "menu":{
            "home":"Главная",
            "movies":"Фильмы",
            "tvseries":"Сериалы",
            "catalog":"Каталог",
            "filter":"Фильтр",
            "collections":"Подборки",
            "relise":"Релизы",
            "anime":"Аниме",
            "bookmark":"Закладки",
            "like":"Нравится",
            "time":"Позже",
            "history":"История",
            "timetable":"Расписание",
            "mytorrents":"Торренты",
            "settings":"Настройки",
            "about":"Информация",
            "console":"Консоль"
         },
         "more":{
            "title":"\n        Еще\n    "
         },
         "player":{
            "info":{
               "size":"Загрузка..."
            }
         },
         "plugins_catalog":{
            "working":"Рабочие плагины",
            "working_descr":"Плагины, которые точно работают в лампе.",
            "popular":"Популярные плагины среди пользователей",
            "popular_descr":"Установка из неизвестных источников может привести к некорректной работе приложения."
         },
         "search":{
            "main":{
               "title":"Поиск",
               "input":"Введите текст..."
            }
         },
         "settings":{
            "title":"Настройки",
            "account":{
               "account_use_name":"Синхронизация",
               "account_use_descr":"Синхронизация с сервисом CUB: синхронизация ваших закладок, истории просмотров, меток и тайм-кодов. Сайт: https://cub.watch",
               "account_user_hide":"",
               "user_info_name":"Вошли как",
               "user_profile_name":"Профиль",
               "user_sync_name":"Синхронизировать",
               "user_sync_value":"Сохранить локальные закладки в аккаунт CUB",
               "user_out_name":"Выйти из аккаунта",
               "signin":"Авторизация",
               "signin_name":"Пароль",
               "status":"Статус",
               "email_placeholder":"Не указан",
               "password_placeholder":"Не указан"
            },
            "cloud":{
               "use_cloud_name":"Синхронизация",
               "use_cloud_descr":"Синхронизация даёт возможность синхронизировать ваши закладки, историю просмотров, метки и тайм-коды. Инструкция по подключению https://github.com/yumata/lampa/wiki",
               "authorization":"Авторизация",
               "status":"Статус",
               "token_placeholder":"Не указан"
            },
            "input":{
               "links":"Избранное"
            },
            "interface":{
               "size_name":"Размер интерфейса",
               "background":"Фон",
               "background_name":"Показывать фон",
               "background_type_name":"Тип фона",
               "performance":"Быстродействие",
               "animation_name":"Анимация",
               "animation_descr":"Анимация карточек и контента",
               "mask_name":"Затухание",
               "mask_descr":"Плавное затухание карточек снизу и сверху",
               "scroll_type_name":"Тип скролинга",
               "card_view_name":"Тип просмотра карточек",
               "card_view_descr":"По мере скроллинга ленты, карточки будут подгружаться постепенно или загружаться все."
            },
            "main":{
               "account_name":"Аккаунт",
               "interface_name":"Интерфейс",
               "player_name":"Плеер",
               "parser_name":"Парсер",
               "torrserver_name":"TorrServer",
               "plugins_name":"Плагины",
               "cloud_name":"Синхронизация",
               "more_name":"Остальное"
            },
            "more":{
               "start_page_name":"Стартовая страница",
               "start_page_descr":"С какой страницы начинать при запуске",
               "source":"Источник",
               "source_name":"Основной источник",
               "source_descr":"Откуда брать информацию о фильмах",
               "tmdb_lang_name":"TMDB",
               "tmdb_lang_descr":"На каком языке отображать данные с TMDB",
               "poster_size_name":"Разрешение постеров TMDB",
               "screensaver":"Скринсейвер",
               "screensaver_name":"Показывать заставку при бездействии",
               "screensaver_type_name":"Тип заставки",
               "proxy":"Прокси",
               "proxy_tmdb_name":"Проксировать TMDB",
               "proxy_other_name":"Проксировать остальные ресурсы",
               "hints_title":"",
               "hints_name":"Показывать подсказки",
               "hints_again_name":"Показывать подсказки по новой",
               "others":"Еще",
               "pages_save_total_name":"Сколько страниц хранить в памяти",
               "pages_save_total_descr":"Хранит страницы в том состоянии, в котором вы их покинули.",
               "time_offset_name":"Сместить время",
               "navigation_type_name":"Тип навигации",
               "device_name_name":"Название устройства",
               "clear_storage_name":"Очистить кеш",
               "clear_storage_value":"Будут очищены все настройки и данные",
               "device_placeholder":"Например: Моя Лампа"
            },
            "parser":{
               "parser_use_name":"Использовать парсер",
               "parser_use_descr":"Тем самым, вы соглашаетесь принять на себя всю отвественность за использование публичных ссылок для просмотра торрент и онлайн контента.",
               "parser_torrent_type_name":"Тип парсера для торрентов",
               "parser_type":"Jackett",
               "jackett_url_name":"Ссылка",
               "jackett_url_descr":"Укажите ссылку на скрипт Jackett",
               "jackett_key_name":"Api ключ",
               "jackett_key_descr":"Находится в Jackett",
               "torlook":"Torlook",
               "torlook_parse_type_name":"Метод парсинга сайта TorLook",
               "parser_website_url_name":"Ссылка на парсер сайтов",
               "parser_website_url_descr":"Зарегистрируйтесь на сайте scraperapi.com, прописать ссылку api.scraperapi.com?api_key=...&url={q}",
               "others":"Еще",
               "parse_lang_name":"Поиск",
               "parse_lang_descr":"На каком языке производить поиск?",
               "parse_in_search_name":"Парсер в поиске",
               "parse_in_search_descr":"Показывать результаты в поиске?",
               "jackett_url_placeholder":"Например: 192.168.х",
               "jackett_key_placeholder":"Например: sa0sk83d..",
               "parser_web_placeholder":"Например: scraperapi.com"
            },
            "player":{
               "player_name":"Тип плеера",
               "player_descr":"Каким плеером воспроизводить",
               "reset_player_name":"Сбросить плеер по умолчанию",
               "reset_player_descr":"Сбрасывает выбранный Android плеер в приложении",
               "playlist_next_name":"Следующая серия",
               "playlist_next_descr":"Автоматически переключать на следующую серию по окончании текущей",
               "player_timecode_name":"Таймкод",
               "player_timecode_descr":"Продолжить с последнего места просмотра",
               "player_scale_method_name":"Метод масштабирования",
               "player_scale_method_descr":"Каким образом производить вычисления для масштабирования видео",
               "subtitle":"Субтитры",
               "subtitles_start_name":"Включить",
               "subtitles_start_descr":"Всегда включать субтитры после запуска видео",
               "subtitles_size_name":"Размер",
               "subtitles_stroke_name":"Использовать окантовку",
               "subtitles_stroke_descr":"Субтитры будут обведены черным цветом для улучшения читаемости",
               "subtitles_backdrop_name":"Использовать подложку",
               "subtitles_backdrop_descr":"Субтитры будут отображаться на полупрозрачной подложке для улучшения читаемости",
               "others":"Еще",
               "video_quality_default_name":"Качество видео по умолчанию",
               "video_quality_default_descr":"Предпочтительное качество видео для просмотра"
            },
            "plugins":{
               "plugins_name":"Добавить плагин",
               "plugins_descr":"Для удаления добавленного плагина удерживайте или нажмите дважды кнопку OK на нем",
               "install_name":"Установить плагин",
               "install_descr":"Установить плагин из списка доступных"
            },
            "server":{
               "torrserver_use_link_name":"Использовать ссылку",
               "links":"Ссылки",
               "torrserver_url_name":"Основная ссылка",
               "torrserver_url_descr":"Укажите основную ссылку на скрипт TorrServer",
               "torrserver_url_two_name":"Дополнительная ссылка",
               "torrserver_url_two_descr":"Укажите дополнительную ссылку на скрипт TorrServer",
               "additionally":"Дополнительно",
               "internal_torrclient_name":"Встроенный клиент",
               "internal_torrclient_descr":"Использовать встроенный JS-клиент TorrServe, иначе запускается системный.",
               "torrserver_savedb_name":"Сохранить в базу",
               "torrserver_savedb_descr":"Торрент будет добавлен в базу TorrServer",
               "torrserver_preload_name":"Использовать буфер пред.загрузки",
               "torrserver_preload_descr":"Дожидаться заполнения буфера предварительной загрузки TorrServer перед проигрыванием",
               "authorization":"Авторизация",
               "torrserver_auth_name":"Вход по паролю",
               "torrserver_login_name":"Логин",
               "torrserver_password_name":"Пароль",
               "torrurl_placeholder":"Например: 192.168.х",
               "torrurltwo_placeholder":"Например: 192.168.х",
               "torrlogin_placeholder":"Не указан",
               "torrpass_placeholder":"Не указан"
            }
         },
         "timeline_details":{
            "viewed":"Просмотренно"
         },
         "torrent":{
            "error":{
               "checklist_descr":"Не удалось подключится к TorrServe, проблема может быть разной. Давайте быстро пройдемся по списку возможных проблем и все проверим.",
               "progress_steps":"Выполнено 0 из 0",
               "checklist_list_1":"Запущен ли TorrServe",
               "checklist_list_2":"Динамический IP адрес",
               "checklist_list_3":"Протокол",
               "checklist_list_4":"Блокировка антивирусами",
               "checklist_list_5":"Проверьте на доступность",
               "checklist_list_6":"Все равно не работает",
               "checklist_footer":"Начать проверку",
               "nocheck":"Причины",
               "nocheck_1":"Запрос на пинг вернул неверный формат",
               "nocheck_2":"Ответ от TorServer:",
               "nocheck_todo":"Что делать?",
               "nocheck_todo_1":"Убедитесь что у вас стоит версия Matrix",
               "nocheck_check":"Как проверить?",
               "nocheck_check_1":"Откройте браузер и зайдите по адресу",
               "nocheck_check_2":"Убедитесь что в ответе есть наличие кода",
               "noconnect_cause":"Причины",
               "noconnect_cause_1":"спользуется адрес:",
               "noconnect_cause_2":"екущий адрес",
               "noconnect_cause_3":"вляется неверным!",
               "noconnect_cause_4":"екущий ответ:",
               "noconnect_howto":"Как правильно?",
               "noconnect_howto_1":"спользуйте адрес:",
               "noconnect_howto_2":"Используйте версию Matrix",
               "noconnect_howto_3":"а этом же устройстве, откройте браузер и зайдите по адресу",
               "noconnect_howto_4":"Если же браузер не ответит, проверьте запущен ли TorrServe, или перезагрузите его.",
               "noconnect_howto_5":"сли же браузер ответил, убедитесь что в ответе есть строка",
               "nohash_cause":"Причины",
               "nohash_cause_1":"TorServer не смог скачать торрент файл",
               "nohash_cause_2":"Ответ от TorServer:",
               "nohash_cause_3":"Ссылка:",
               "nohash_whatto":"Что делать?",
               "nohash_whatto_1":"Проверьте правильно ли вы настроили Jackett",
               "nohash_whatto_2":"Приватные источники могут не выдавать ссылку на файл",
               "nohash_whatto_3":"Убедитесь что Jackett тоже может скачать файл",
               "nohash_whatto_4":"Написать в нашу телеграм группу: @lampa_group",
               "nohash_whatto_5":"Укажите какой фильм, какая раздача и по возможности фото этой разадачи",
               "checklist_info_1":"Убедитесь, что вы запустили TorrServe на устройстве где он установлен.",
               "checklist_info_2":"Частая ошибка, изменился IP адрес вашего устройства. Убедитесь, что IP адрес который вы ввели",
               "checklist_info_3":" совпадает с адресом устройства на котором установлен TorrServe",
               "checklist_info_4":"Для обращения к TorrServe, необходим порт :8090 в конце адреса. Убедитесь, что в конце вашего IP адреса прописан порт, ваш текущий адрес",
               "checklist_info_5":"Частое явление, антивирус или брандмауэр может блокировать доступ по IP адресу, попробуйте отключить антивирус и брандмауэр.",
               "checklist_info_6":"На любом другом устройстве, где не установлен TorrServe, откройте в браузере адрес",
               "checklist_info_7":"и проверьте, доступен ли ответ от TorrServe",
               "checklist_info_8":"Если после всех проверок все равно не работает, попробуйте перезагрузить TorrServe и интернет адаптер.",
               "checklist_info_9":"Если проблема не устранена, пишите в телеграм группу @lampa_group с текстом (Лампа не подключается к TorrServe после всех проверок, текущий адрес"
            },
            "install":{
               "trr_title":"Необходим TorrServe",
               "trr_descr":"TorrServe – приложение, которое позволяет просматривать контент из торрент-файлов в онлайн режиме.",
               "trr_label":"Telegram-группы"
            },
            "item":{
               "bitrate":"Битрейт:",
               "speed":"Мбит/с",
               "seeds":"Раздают:",
               "grabs":"Качают:"
            },
            "serial":{
               "series":{
                  "output":"Выход"
               },
               "season":"Сезон"
            }
         },
         "utils":{
            "account":{
               "title":"Синхронизация",
               "i_title_1":"Подтверждаю",
               "i_subtitle_1":"Все закладки будут перенесены в профиль (",
               "i_title_2":"Отменить",
               "succes_notify":"Все закладки успешно перенесены",
               "notify_1":"Не удалось получить список профилей",
               "token_1":"Авторизованы",
               "token_2":"Вы вошли под аккаунтом ",
               "token_3":"Вход не выполнен",
               "token_4":"Ожидаем входа в аккаунт",
               "network_silent":"Общий",
               "network_silent_result_1":"Ошибка",
               "network_silent_result_2":"Ошибка",
               "network_silent_result_3":"Нет подключения к сети"
            },
            "android":{
               "no_native":"No Native request",
               "voicestart":"Работает только на Android TV",
               "checkv_1":"Обновите приложение.<br>Требуется версия: ",
               "checkv_2":"<br>Текущая версия: ",
               "checkv_3":"Обновите приложение.<br>Требуется версия: "
            },
            "api":{
               "cub":{
                  "filter_1":"Сейчас смотрят",
                  "filter_2":"Последнее добавление",
                  "filter_3":"Фильмы",
                  "filter_4":"Мультфильмы",
                  "filter_5":"Сериалы",
                  "filter_6":"Приключения",
                  "filter_7":"Комедии",
                  "filter_8":"Семейное",
                  "filter_9":"Ужасы",
                  "filter_10":"Фантастика",
                  "filter_11":"Триллер",
                  "book_1":"Продолжить просмотр",
                  "book_2":"Вы смотрели",
                  "recomend_1":"Рекомендуем посмотреть",
                  "filter_12":"Сейчас смотрят",
                  "filter_13":"Новые серии",
                  "filter_14":"Популярное",
                  "filter_15":"Последнее добавление",
                  "filter_16":"Новинки этого года",
                  "filter_17":"С высоким рейтингом"
               },
               "ivi":{
                  "62":"Военные драмы",
                  "73":"Криминальные драмы",
                  "217":"Исторические сериалы",
                  "917":"Триллеры-ужасы",
                  "1246":"Экранизации детективов",
                  "1327":"Приключенческие комедии",
                  "1335":"Криминальные комедии",
                  "1411":"Романтические драмы",
                  "1413":"Фантастические драмы",
                  "1418":"Мистические фильмы",
                  "2460":"Мультики для всей семьи",
                  "4495":"Зарубежные сериалы",
                  "4655":"Рекомендуем вам посмотреть",
                  "oncomp_1":"Продолжить просмотр",
                  "oncomp_2":"Вы смотрели",
                  "movie_new":"Премьеры фильмов",
                  "movie_best":"Лучшие фильмы",
                  "movie_popular":"Популярное сейчас",
                  "movie_8448":"Выбор ivi",
                  "movie_1984":"Новинки",
                  "movie_1712":"Зарубежные",
                  "movie_935":"Русские",
                  "movie_12839":"Популярное сейчас",
                  "movie_1057":"Выбор ivi"
               },
               "okko":{
                  "cat_1":"Новое",
                  "cat_2":"Топ-новинки",
                  "cat_3":"Комедийные фильмы ужасов",
                  "cat_4":"Фильмы про маньяков",
                  "cat_5":"Фильмы про ведьм",
                  "cat_6":"Фильмы про зомби",
                  "cat_7":"Русские",
                  "cat_8":"Новое",
                  "cat_9":"Очень страшные",
                  "cat_10":"Про маньяков",
                  "cat_11":"С чёрным юмором",
                  "cat_12":"Лёгкие",
                  "cat_13":"Комедийные",
                  "cat_14":"Русские"
               },
               "parser":{
                  "err_1":"Укажите ссылку для парсинга Jackett",
                  "err_2":"Укажите ссылку для парсинга TorLook",
                  "err_5":"Ошибка в запросе",
                  "err_3":"Неудалось получить magnet ссылку"
               },
               "tmdb":{
                  "now_playing":"Сейчас смотрят",
                  "trending_day":"Сегодня в тренде",
                  "trending_week":"В тренде за неделю",
                  "upcoming":"Смотрите в кинозалах",
                  "popular":"Популярные фильмы",
                  "tv_popular":"Популярные сериалы",
                  "top_rated":"Топ фильмы",
                  "tv_top_rated":"Топ сериалы",
                  "oncom_1":"Продолжить просмотр",
                  "oncomp_2":"Вы смотрели",
                  "oncomp_3":"Рекомендуем посмотреть",
                  "now_playing_wath":"Сейчас смотрят",
                  "popular_2":"Популярное",
                  "discover":"Новинки",
                  "airing":"Сегодня в эфире",
                  "on_air":"На этой неделе",
                  "top_2":"В топе",
                  "s_movie":"Фильмы",
                  "s_tv":"Сериалы",
                  "production":"Производство",
                  "departament":"Режиссура",
                  "gender_1":"Актриса",
                  "gender_2":"Актер",
                  "movie_g1":"- Фильмы",
                  "tv_g2":"- Сериалы"
               }
            },
            "cloud":{
               "renderStatus_1":"Отключено",
               "renderStatus_2":"Включите синхронизацию",
               "renderStatus_3":"Не авторизованы",
               "renderStatus_4":"Необходимо авторизоваться ",
               "renderStatus_5":"Авторизация не удалась",
               "renderStatus_6":"Проверьте введённые данные и повторите попытку",
               "renderStatus_7":"Вошли",
               "renderStatus_8":"Вы успешно авторизовались",
               "renderStatus_9":"Синхронизовано"
            },
            "math":{
               "size_1":"0 Байт",
               "sizes_1024":{
                  "0":"Байт",
                  "1":"КБ",
                  "2":"МБ",
                  "3":"ГБ",
                  "4":"ТБ",
                  "5":"ПБ"
               },
               "sizes_1000":{
                  "0":"бит",
                  "1":"Кбит",
                  "2":"Мбит",
                  "3":"Гбит",
                  "4":"Тбит",
                  "5":"Пбит"
               },
               "months_arr":{
                  "0":"Январь",
                  "1":"Февраль",
                  "2":"Март",
                  "3":"Апрель",
                  "4":"Ма",
                  "5":"Июнь",
                  "6":"Июль",
                  "7":"Август",
                  "8":"Сентябрь",
                  "9":"Октябрь",
                  "10":"Ноябрь",
                  "11":"Декабрь"
               },
               "days_arr":{
                  "0":"Воскресенье",
                  "1":"Понедельник",
                  "2":"Вторник",
                  "3":"Среда",
                  "4":"Четверг",
                  "5":"Пятница",
                  "6":"Суббота"
               }
            },
            "plugins":{
               "draw_1":"Установить",
               "loadmem_1":"При загрузке приложения, часть плагинов не удалось загрузить",
               "offlist_1":"Просмотр онлайн",
               "offlist_2":"Просмотр онлайн",
               "err_1":"Не удалось проверить работоспособность плагина. Однако это не означает, что плагин не работает. Перезагрузите приложение для выяснения, загружается ли плагин.",
               "err_2":"Для работы плагина необходимо перезагрузить приложение.",
               "sett_component_1":"Этот плагин уже установлен.",
               "cat_details":" - Установок",
               "iscub_1":"Загружено из CUB",
               "iscun_2":"Нажмите для проверки плагина"
            },
            "reguest":{
               "jqxhr_1":"Нет подключения к сети.",
               "jqxhr_2":"Запрошенная страница не найдена. [404]",
               "jqxhr_3":"Авторизация не удалась",
               "jqxhr_4":"Внутренняя ошибка сервера. [500]",
               "jqxhr_5":"Запрошенный синтаксический анализ JSON завершился неудачно.",
               "jqxhr_6":"Время запроса истекло.",
               "jqxhr_7":"Запрос был прерван.",
               "jqxhr_8":"Неизвестная ошибка: "
            }
         },
         "app":{
            "title_exit":"Выход",
            "title_exit_1":"Да, выйти",
            "title_exit_2":"Продолжить",
            "book":"Закладки",
            "like":"Нравится",
            "history":"История просмотров",
            "history_1":"Позже"
         }
      }
   }
}


const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' }
};

const rerender = function() {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $('body').localize();
  $('title').text($.t('head.title'))
  $('meta[name=description]').attr('content', $.t('head.description'))
}

$(function () {
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      compatibilityJSON: 'v3',
      debug: true,
      supportedLngs: ['en', 'ru'],
      //lng: "en",
      fallbackLng: ['en'],
      load: 'languageOnly',
      saveMissing: false,
      preload:['en'],
      resources: resources_lang
    }, function(err, t) {
      if (err) {
        $('body').append('<div style="margin: 15px;color: white;z-index: 999;position: absolute;">Error loading translation: i18next init.</div>');
        return console.error(err);
      }

      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $, { useOptionsAttr: false, parseDefaultValueFromContent: true });

      $('body').append('<script id="lampa-app" src="app.min.js"></script>');
      
      // fill language switcher
      Object.keys(lngs).map(function(lng) {
        const opt = new Option(lngs[lng].nativeName, lng);
        if (lng === i18next.resolvedLanguage) {
          opt.setAttribute("selected", "selected");
        }
        $('#languageSwitcher').append(opt);        
      });
      $('#languageSwitcher').change(function(a, b, c) {
        const chosenLng = $(this).find("option:selected").attr('value');
        i18next.changeLanguage(chosenLng, function(){
          localStorage.removeItem("activity");
          location.reload();
          //$('#lampa-app').remove();
          //$('body').append('<script id="lampa-app" src="app.js"></script>');
          //Lampa.Activity.replace()
          rerender();
        });
      });

      rerender();
    });
});


//Observe changes in DOM using MutationObserver, bind class to localize
$(function(){
const targetNode = document.getElementsByTagName('body')[0];
const config = { attributes: true, childList: false, subtree: false };
const callback = function(mutationsList, observer) {
  for(var mutation of mutationsList) {
    if (mutation.type === 'attributes') {
      if(mutation.attributeName === 'class'){
        $("body").localize();
      }
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
});