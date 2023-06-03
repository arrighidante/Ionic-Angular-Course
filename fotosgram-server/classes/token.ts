import jwt from 'jsonwebtoken';

export default class Token {
  private static seed: string = 'my-private-secret';
  private static expires: string = '30d';

  constructor() {}

  static getJwtToken(payload: any): string {
    return jwt.sign(
      {
        user: payload,
      },
      this.seed,
      { expiresIn: this.expires }
    );
  }

  static comprobarToken(userToken: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(userToken, this.seed, (err, decoded) => {
        if (err) {
          resolve('Errrrroorrreeee');
        } else {
          resolve(decoded);
        }
      });
    });
  }
}
