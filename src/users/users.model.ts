import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserRoles } from '../common/services/app.model';
export type CatDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: UserRoles })
  role: UserRoles;
}
export const UsersSchems = SchemaFactory.createForClass(User);
