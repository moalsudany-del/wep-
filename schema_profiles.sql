CREATE TABLE IF NOT EXISTS user_profiles (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNSIGNED NOT NULL,
    full_name VARCHAR(160) NOT NULL,
    age TINYINT UNSIGNED NOT NULL,
    department VARCHAR(160) NOT NULL,
    university VARCHAR(160) NOT NULL,
    stage TINYINT UNSIGNED NOT NULL,
    period ENUM('morning','evening','hosting') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user (user_id),
    CONSTRAINT fk_user_profiles_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
