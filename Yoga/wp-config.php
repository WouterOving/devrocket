<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'aX@j.Dcinj1q@m9DJi%*Q*x&h+_gZh3dH_<OjQ[/^6WNZ$_}K8>pO/c5,(4|P5d[');
define('SECURE_AUTH_KEY',  '[0&lXE/K3d4>97#9FnMG`SWPz>_WAi_@0^Kjr+|0CY=SI@%d@; p^iH15lWet`~I');
define('LOGGED_IN_KEY',    '7~M@)1s;=#C0 +:=BAQl0ojv_bcQavPR;5*Dr0b%[y)L);VNU&$M)NUu;NRb<4zr');
define('NONCE_KEY',        'ZWl2lI-&_1>G9Lj+q=t3-OS*3=mYW&kz@d$$-Tp}q F&/y!M/7.!O|n;85up<_U@');
define('AUTH_SALT',        'b|fy!ODSC93< Uo ?!2>rQ)Lh(b)xmPwq`,i:!sUI627sgS9!Y&:basw,S3*@u#Y');
define('SECURE_AUTH_SALT', ' JwoUPc2pAXZ15#;Fw5GBc7Zyi2!M|Cp*B(Z=p21]<[4l^@~q@sa2V*U=6PwWd!A');
define('LOGGED_IN_SALT',   '{|Nqmw=X.5c.bUvxJ;iP^PwD.O:1@zbQN%bF!6H7b8yP%4Xj)@,+EZH($^W`q(b`');
define('NONCE_SALT',       '1w@i.E>si$.(FrIgtf&q*U.^=d~Qe:_ KE<^C$yKm$lt.zA YL<5>oaY;xZ~simG');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
