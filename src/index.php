<!-- *******************************************************************************************************************
     If you'd like to view the ACTUAL source code, why not check out the GitHub repository?
     https://github.com/oliverlukedavenport/oliverdavenport.co.uk
******************************************************************************************************************** -->
<!--suppress JSUnresolvedLibraryURL -->
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="/css/style.min.css">
    <link rel="shortcut icon" href="/img/icon.png?<?= time() ?>">
    <title>Oliver Davenport</title>
</head>

<body>
<div class="d-flex align-items-center full-vh full-vw">
    <div class="center-margin text-center">
        <img src="/img/icon.png" class="animated animated-half fadeInUpSmall">
        <h1 id="title" class="animated animated-half fadeInUpSmall">Oliver Davenport</h1>

        <ul class="social-links">
            <li class="github animated animated-half fadeInUp" data-toggle="tooltip" data-placement="bottom"
                title="GitHub"><a href="https://github.com/oliverlukedavenport"><i class="fa fa-github"></i></a></li>
            <li class="linkedin animated animated-half fadeInUp" data-toggle="tooltip" data-placement="bottom"
                title="LinkedIn"><a href="https://www.linkedin.com/in/oliverdavenport/"><i class="fa fa-linkedin"></i></a></li>
            <li class="facebook animated animated-half fadeInUp" data-toggle="tooltip" data-placement="bottom"
                title="Facebook"><a href="https://facebook.com/oldavenport"><i class="fa fa-facebook"></i></a></li>
            <li class="twitter animated animated-half fadeInUp" data-toggle="tooltip" data-placement="bottom"
                title="Twitter"><a href="https://twitter.com/oldavenport"><i class="fa fa-twitter"></i></a></li>
            <li class="instagram animated animated-half fadeInUp" data-toggle="tooltip" data-placement="bottom"
                title="Instagram"><a href="https://instagram.com/oliverlukedavenport"><i
                            class="fa fa-instagram"></i></a></li>
            <li class="mail animated animated-half fadeInUp" data-toggle="tooltip" data-placement="bottom"
                title="Email"><a href="mailto:me@olivr.me"><i class="fa fa-envelope"></i></a></li>
        </ul>

        <small class="text-copyright animated fadeIn">&copy; <?= date("Y") ?></small>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
<script src="/js/main.min.js"></script>
<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-40675335-1', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>