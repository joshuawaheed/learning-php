<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '@`~W,K{8H9KBm8 33R{hfp#lJ.t0Z_*&E*bz%oh;*rwj/Pt^JTal[Lwbp.%SLs9X' );
define( 'SECURE_AUTH_KEY',   '7m^BRburWuyS6zFH|?Ks79gR>4@7eBNs]/7o2W{KUC#//t)j$^?Wt:%Psu] /hXO' );
define( 'LOGGED_IN_KEY',     '0{:Ays]a47aSW>;p&z&<YLOFd[I=}/WF.hj,O7N][rv~fA.hB-ti8-7(ga;]|,^V' );
define( 'NONCE_KEY',         'eS$d}VrxI`U**f6yx<#X1]]>jj3Uol+x&y[a8xeYGJ5tJ^3nQy|OrVT.G+nF_KyX' );
define( 'AUTH_SALT',         '99j~^#kU}FKjSg3fzR`8~NK%!3rE7(@/ u{fR$_/{/$PA[MYb#n]}c*:u;wZ|rLK' );
define( 'SECURE_AUTH_SALT',  ';+xm,:8X_dP5uhgqhDu|YHe,F+mDMCdt!,g}; :2^^*P{~99.P0on2A.bS4pKx}M' );
define( 'LOGGED_IN_SALT',    '3;*%l;~^x[5/D|vCMVD|x[S$rP>}R]Rikzt[OP?;A#dS)Tm`PF<S}EoZW#G.RfDq' );
define( 'NONCE_SALT',        'Ifa>enGYo2T;=aNTr1%K~ab}yn^7~ZoklT{Li((!zs<{M/$B]vL.&)SP)^{Z*aZu' );
define( 'WP_CACHE_KEY_SALT', '&1Z~Q~f|-hXQ4WP;R6Iwk9YeuuHCB)j|I&zM^{tnZ>T$nNeL@k~cA.rCJOf/8E2A' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
