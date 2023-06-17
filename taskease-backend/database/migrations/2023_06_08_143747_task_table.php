<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //crear tabla tasks
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
           // $table->string('name', 100)->nullable(false);
            $table->string('title', 100)->nullable(false);
            $table->text('description')->nullable(true);
            $table->date('expiration_date')->nullable(true);
            $table->enum('status', ['pending', 'completed', 'in_progress','deleted'])->default('pending');
            $table->unsignedBigInteger('user_id')->nullable(false);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('category_id')->nullable(false);
           // $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('tasks');
    }
};
