<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      // Postテーブルの前データ削除
      Post::truncate();

      Post::factory()
        ->count(10)
        ->create();
    }
}
