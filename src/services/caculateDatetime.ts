export const calculateUnixTime = (expiresIn: string): number => {
    const hours = parseInt(expiresIn, 10);
    const expiresInInSeconds = hours * 60 * 60; // Convert hours to seconds
    return Math.floor(Date.now() / 1000) + expiresInInSeconds; // Current Unix time + expiresInInSeconds
  };
  