<%-- 
    Document   : header
    Created on : Feb 8, 2018, 4:53:58 PM
    Author     : Nourhan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

  <%@page import="dao.implementations.UserDAOImp"%>
                            <%@page import="java.util.*"%>
                            <%@page import="dto.UserDTO"%>
 <%      
  
 
 HttpSession mysession = request.getSession(true);
  UserDTO userobj=(UserDTO)mysession.getAttribute("user");
String userstatus="";
      if(userobj ==null){
      userstatus="null";
      
      }else{
      userstatus=userobj.getName();
      }
      
 %>
<!DOCTYPE html>
<html>
    <title>Home</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->
	<link rel="icon" type="image/png" href="images/icons/favicon.png"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/slick/slick.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/lightbox2/css/lightbox.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
        	<link rel="stylesheet" type="text/css" href="css/Adminn.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">

   
<!--===============================================================================================-->
 <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
  <%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
</head>
<body class="animsition">

	<!-- Header -->
	<header class="header1">
		<!-- Header desktop -->
		<div class="container-menu-header">
			<div class="topbar">
				<div class="topbar-social">
					<a href="#" class="topbar-social-item fa fa-facebook"></a>
					<a href="#" class="topbar-social-item fa fa-instagram"></a>
					<a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
					<a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
					<a href="#" class="topbar-social-item fa fa-youtube-play"></a>
				</div>
                           
				<span class="topbar-child1">
					Free shipping for standard order over ₹999
				</span>

				<div class="topbar-child2">
					<span class="topbar-email">
						ShopHub@example.com
					</span>

					<div class="topbar-language rs1-select2">
						<select class="selection-1" name="time">
							<option>INR</option>
							
						</select>
					</div>
				</div>
			</div>

			<div class="wrap_header">
				<!-- Logo -->
				<a href="index.html" class="logo">
					<img src="images/icons/lognew.png" alt="IMG-LOGO">
				</a>

				<!-- Menu -->
				<div class="wrap_menu">
					<nav class="menu">
						<ul class="main_menu">
							<li>
								<a href="index.jsp">Home</a>
								<ul class="sub_menu">
                                                                    <!--
									<li><a href="index.html">Homepage V1</a></li>
									<li><a href="home-02.html">Homepage V2</a></li>
									<li><a href="home-03.html">Homepage V3</a></li>
                                                                    -->
								</ul>
							</li>

							<li>
								<a href="Products.jsp">Shop</a>
							</li>

							<li class="sale-noti">
								<a href="Adminn.jsp">Sales</a>
							</li>

							<li>
								<a href="SignUp.jsp">Signup</a>
							</li>

							<li>
								<a href="SignUp.jsp">Login</a>
							</li>

							<li>
								<a href="About.jsp">About</a>
							</li>

							<li>
								<a href="contact.jsp">Contact</a>
							</li>
						</ul>
					</nav>
				</div>

				<!-- Header Icon -->
				<div class="header-icons">
					<a href="#" class="header-wrapicon1 dis-block">
						<img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
					</a>

					<span class="linedivide1"></span>

					<div class="header-wrapicon2">
						<img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
						<span class="header-icons-noti" id="cartnumm">0</span>

						<!-- Header cart noti -->
						<div class="header-cart header-dropdown">
							<ul class="header-cart-wrapitem" id="cartdata">
								<!-- data aayega javascript se data populate krke html me -->
							
                                                        
                                                        </ul>

							<div class="header-cart-total" >
                                                            Total: ₹<span id="totalcartamount"></span>
							</div>

							<div class="header-cart-buttons">
								<div class="header-cart-wrapbtn">
									<!-- Button -->
									<a href="cart.jsp" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div class="header-cart-wrapbtn">
									<!-- Button -->
									<a href="cartpage.jsp" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </header><!--/header-->
		