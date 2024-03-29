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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fiverr' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'B{-87X.s{&K%XnT^6roWsSmO2W^;A1NrmtMXap;~12e?fLf2dWuZA5@Y(b6K>V.A' );
define( 'SECURE_AUTH_KEY',  'ZgKB@CB0N.t5V-IpH!}vbXBt- F:<?nR-wuITksu#ji$:x71*61XP$5F!vd!5.8[' );
define( 'LOGGED_IN_KEY',    'N7>,Kn@Aa8&>9s&RPi;[_!uI(KHbWFfQ3]>.&8b  {1gcxz)&}DHz&q7U>[u*|G#' );
define( 'NONCE_KEY',        '<Of9,]ky!GlS.pX,==Dw,1}MNEWb}3PiL7_f,[pPHjRg[>Mju9*<P@@Zy[3O$39X' );
define( 'AUTH_SALT',        'wu[M70W$I/ywj|L!}3&A^Q?gD]%KUp7A* iq+Y$w={mJh_ZqiK,VG6`R.(3vw?H3' );
define( 'SECURE_AUTH_SALT', 'SThii6O^IB+>A/gt{!u*l3e` ~Lyv5O9T.>3&dblTS~Gq4.!tS~d5U+-ULC%=^)(' );
define( 'LOGGED_IN_SALT',   'WRdREyTV*^QeUTY^|JMG0thA.lmFz&IIEkCo3B. @Jy_lo`x*3(aHJ6i3{ySz%q0' );
define( 'NONCE_SALT',       ':]MJukisi-bMH6Bgf)s.p5POv2C_c6t!SI_GAyvK?$s<q>TiUsd_3yHriP%KI9l8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
