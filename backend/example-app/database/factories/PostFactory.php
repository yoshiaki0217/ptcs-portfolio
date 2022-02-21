<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
      // ユーザーをランダムに取得
      $user = User::all()->random();
      return [
          'user_id' => $user->id,
          'text'    => $this->faker->realText()
        ];
    }
}
