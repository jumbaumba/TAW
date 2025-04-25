import { Review } from "../entities/review/models/Reviews";
import { User } from "../entities/user/models/User";

// Теперь в модели Post будет внешний ключ userId, который ссылается на User.

export const initModels = () => {
  // Здесь настраиваем связи между моделями, если нужно

  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  return {
    Review,
    User,
  };
};