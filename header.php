<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg intro">
<?php include('loader.php');?>
<head>
<title><?php wp_title(); ?></title>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="profile" href="http://gmpg.org/xfn/11">
<?php wp_head(); ?>
<script>
  (function(d) {
    var config = {
      kitId: 'cpq8vmc',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
</head>
<body <?php body_class(); ?>>
<nav role="nav">
  <ul id="nav-container" class="container" role="nav">
    <li class="logo">
      <a href="<?php echo home_url(); ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/svg/logo.svg" onerror="this.src='<?php echo get_template_directory_uri(); ?>/assets/img/brand/logo.png'" />
      </a>
    </li>
    <li><a href="#" class="mobile-menu"><i class="icon-menu"></i></a></li>
    <li><a href="<?php echo home_url(); ?>#hoochlife">HoochLife</a></li>
    <li><a href="<?php echo home_url(); ?>#liquidgold">Liquid Gold</a></li>
  <!--  <li><a href="<?php echo home_url(); ?>#whatson">What's On</a></li> -->
    <li><a href="<?php echo home_url(); ?>#social">Social</a></li>
    <li><a href="<?php echo home_url(); ?>#contact">Contact</a></li>
  <!--  <li><a href="<?php echo home_url(); ?>#trade">Trade</a></li> -->
  </ul>
  <ul id="mobile-nav">
    <li class="close"><a href="#" class="mobile-menu"><i class="icon-cancel"></i></a></li>
    <li><a href="<?php echo home_url(); ?>#hoochlife">HoochLife</a></li>
    <li><a href="<?php echo home_url(); ?>#liquidgold">Liquid Gold</a></li>
  <!--  <li><a href="<?php echo home_url(); ?>#whatson">What's On</a></li> -->
    <li><a href="<?php echo home_url(); ?>#social">Social</a></li>
    <li><a href="<?php echo home_url(); ?>#contact">Contact</a></li>
  <!--  <li><a href="<?php echo home_url(); ?>#trade">Trade</a></li>-->
  </ul>
</nav>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'hooch' ); ?></a>
  <?php
    if(is_home()) { ?>
    	<header id="header" class="site-header container-fluid" role="container">
        <div id="hoochlife_intro">
          <div class="click_block"></div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Vh1s7l6Qlz8?mute=1&playlist=Vh1s7l6Qlz8&end=36&autoplay=1&controls=0&disablekb=1&modestbranding=1&playsinline=1&showinfo=0&loop=0&rel=0" frameborder="0"></iframe>
        </div>
      </header>
    <?php
      } elseif(is_singular('post')) { ?>
    	<header id="header" class="site-header container-fluid" role="container">
        <div id="single_header">
          <?php
            echo '<div class="img">' . get_the_post_thumbnail() . '</div>';
            echo '<h1 class="banner">' . get_the_title() . '</h1>';
          ?>
        </div>
      </header>
    <?php } ?>
