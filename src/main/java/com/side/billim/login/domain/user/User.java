package com.side.billim.login.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "tb_social_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 10)
    private String type;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Builder
    public User(String type, String name, String email, Role role) {
        this.type = type;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public  User update(String type, String name, String email) {
        this.type = type;
        this.name = name;
        this.email = email;

        return  this;
    }

    public  String getRoleKey() {
        return this.role.getKey();
    }
}
