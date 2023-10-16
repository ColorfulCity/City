function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
//不使用配置文件请注释点上面代码

//星光依旧灿烂，激情仍然燃烧。因为有梦想，所以我存在。你在你的领域里不惜青春，我在我的道路上不知疲倦。
$(function () {
    if (config) {

        $(".webTitle").html(config.webTitle);
        $(".webSubTilte").html(config.webSubTilte);
        $(".portfolio-section").css({
            "margin-top": "30px",
            "padding-top": "50px",
            "text-align": "center !important",
            "background-attachment": "relative !important",
            "background-position": "center center !important",
            "min-height": "800px",
            "width": "100%",
            "background-size": "100%",
            "background-size": "cover",
            "position": "relative !important"
        });

        //------E-------


        let row_i = 0;
        if (config.portfolio) {
            for (let i = 0; i < config.portfolio.length; i++) {
                if (i % 4 == 0) {
                    $(".portfolio-section-main-container").append("<div class=\"row\"></div>");
                    row_i++;
                }
                let e = $(".portfolio-section-main-container .row").eq(row_i - 1);
                let img = config.portfolio[i][0];
                let url = config.portfolio[i][1];
                let projectName = config.portfolio[i][2];
                let brief = config.portfolio[i][3];
                e.append("<div class=\"col-md-3\">\n" +
                    "    <div class=\"porfolio-image img-raised\" data-aos=\"fade-up\"\n" +
                    "         data-aos-anchor-placement=\"top-bottom\">\n" +
                    "        <a href=\"" + url + "\" title=\"点击查看详细信息\">\n" +
                    "            <figure class=\"portfolio-section-main\">\n" +
                    "                <img src=\"" + img + "\" alt=\"Image\" height = \"1\" />\n" +
                    "                <figcaption>\n" +
                    "                    <div class=\"h4\">" + projectName + "</div>\n" +
                    "                    <p>" + brief + "</p>\n" +
                    "                </figcaption>\n" +
                    "            </figure>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>");
            }
        }

        let row_j = 0;
		if(config.ChineseZodiac){
			for (let i = 0; i < config.ChineseZodiac.length; i++) {
			    if (i % 6 == 0) {
			        $(".zodiac-section-main-container").append("<div class=\"row\"></div>");
			        row_j++;
			    }
			    let e = $(".zodiac-section-main-container .row").eq(row_j - 1);
			    let img = config.ChineseZodiac[i][0];
			    let projectName = config.ChineseZodiac[i][1];
                e.append("<div class=\"col-md-2\">\n" +
                    "    <div class=\"zodiac-image img-raised\" data-aos=\"fade-up\"\n" +
                    "         data-aos-anchor-placement=\"top-bottom\">\n" +
                    "            <figure class=\"portfolio-section-main\">\n" +
                    "                <img src=\"" + img + "\" alt=\"Image\" />\n" +
					"                <div class=\"h3\">" + projectName + "</div>\n" +
                    "            </figure>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>");
			}
		}

        if (config.work) {
            for (let i = 0; i < config.work.length; i++) {

                let time = config.work[i][0];
                let what = config.work[i][1];
                let desc = config.work[i][2];


                $(".experience-section .container").append(
                    "<div class=\"card\">\n" +
                    "    <div class=\"row\">\n" +
                    "        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\"\n" +
                    "             data-aos-duration=\"500\">\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <p class=\"time\">\n" +
                    "                    " + time + "\n" +
                    "                </p>\n" +
                    "                <strong class=\"work\">" + what + "</strong>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n" +
                    "            <div class=\"card-body\">\n" +
                    desc +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>"
                );
            }
        }

        if (config.others) {
            for (let i = 0; i < config.others.length; i++) {
                var e;
                if (i % 2 == 0) {
                    e = $(".timeline-left .timeul");
                } else {
                    e = $(".timeline-right .timeul");
                }
                let time = config.others[i][0];
                let what = config.others[i][1];
                let desc = config.others[i][2];
                e.append(
                    "<li>\n" +
                    "    <div class=\"time-title\">" + time + "</div>\n" +
                    "    <span></span>\n" +
                    "    <div class=\"time-content\">\n" +
                    "        <h5>" + what + "</h5>\n" +
                    "        <p>" + desc + "</p>\n" +
                    "    </div>\n" +
                    "\n" +
                    "</li>"
                )
            }
        }

        if (config.icon) {
            for (let i = 0; i < config.icon.length; i++) {
                let img = config.icon[i][0];
                let url = config.icon[i][1];
                let desc = config.icon[i][2];
                $(".icon-insert").append(
                    "<a class=\"my-tooltip\" href=\"" + url + "\" title=\"访问我的社交平台\">\n" +
                    "    <img src=\"" + img + "\" alt=\"\">\n" +
                    "    <span class=\"my-tooltiptext\">" + desc + "</span>\n" +
                    "</a>"
                );
            }
        }
    }



    var h;

    $(window).resize(function () {
        h = $(".page-header").height() - $(".page-header .bg-primary").height();
    })

    progress();
    if ($(window).scrollTop() >= $(".page-header").height() - $(".page-header .bg-primary").height()) {
        $(".page-header .bg-primary").css("cssText", "background-color:rgb(51 51 51)!important");
    }
    $(window).scroll(function () {
        h = $(".page-header").height() - $(".page-header .bg-primary").height();
        if ($(window).scrollTop() >= h) {
            $(".page-header .bg-primary").css("cssText", "background-color:rgb(51 51 51)!important");
        } else {
            $(".page-header .bg-primary").css("cssText", "background-color:rgba(0,0,0,0.20)!important");
        }


        if ($(".skill-section .card").hasClass("aos-animate")) {
            $(".progress-bar-inner").addClass("p-a");
            progress();
        } else {
            $(".progress-bar-inner").removeClass("p-a");
        }

    });

    function progress() {
        var progress = $(".progress-bar-inner");
        progress.each(function (i) {
            var data = $(this).attr('data-value');
            $(this).prev().find("span").html(data + "%");
        });
    }

    $(".send-btn").on("click", mailsend);






    // ---- 座右铭字缓出效果 -----
    var text = "衣带渐宽终不悔，为伊消得人憔悴";
    var length = text.length;
    let index = 0;
    var mottoArrs = config.motto;
    // $.ajaxSettings.async = false;
    // $.getJSON("./motto.json", function (data) {
    //     mottoArrs = data;
    // })
    var e1 = setInterval(insWords, 150);
    var e2 = 0;

    function insWords() {
        if (index <= length + 1 && index >= 0) {
            $(".page-header .motto").append(text[index]);
        }
        index++;
        if (index > length) {
            index += 50;
            e2 = setInterval(delWords, 50);
            clearInterval(e1);
        }
    }

    function delWords() {
        if (index <= length && index >= 0) {
            let shower = text.substr(0, index);
            $(".page-header .motto").html(shower);
        }
        index--;
        if (index < 0) {
            index = -5;
            let i = Math.floor(mottoArrs.length * Math.random());
            text = mottoArrs[i];
            length = text.length;
            e1 = setInterval(insWords, 150);
            clearInterval(e2);
        }

    }

    // ----- END ------



    //--- 绑定按钮特效和文字淡入淡出 ---
    $(".self-intro").fadeIn(3000);
    $(".hvr-bounce-to-right").fadeIn(3000);

    //----END---


});