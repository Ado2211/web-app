export class LoginInfoDto {
    id: number;
    identity: string;
    token: string;
    refeshToken: string;
    refreshTokenExpiresAt: string;

    constructor(id: number, identity: string, jwt: string, refeshToken: string, refreshTokenExpiresAt: string) {
        this.id = id;
        this.identity = identity;
        this.token = jwt;
        this.refeshToken = refeshToken;
        this.refreshTokenExpiresAt = refreshTokenExpiresAt;
    }
}