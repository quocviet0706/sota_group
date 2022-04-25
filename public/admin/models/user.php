<?php
class User extends Db {
    /**____________________________________________________________________________________________________
     * LOGIN
     */
    public static function login_checkUsername($username) {
        $sql = self::$connection->prepare("SELECT * FROM users WHERE username='$username'");
        $sql->execute();
        $items = array();
        $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
        return $items;
    }
    static function login_checkUsernamePassword($username, $password) {
        $sql = self::$connection->prepare("SELECT * FROM users WHERE username='$username' AND password='$password'");
        $sql->execute();
        $items = array();
        $items = $sql->get_result()->fetch_all(MYSQLI_ASSOC);
        return $items;
    }
}