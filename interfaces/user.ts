export interface UserProfile {
    _id?: string;
    userId: string;
    name?: string;
    description?: string;
    location?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }