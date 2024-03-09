export interface UserProfile {
    _id?: string;
    userId: string;
    userName?: string;
    description?: string;
    location?: string;
    profilePhoto?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }