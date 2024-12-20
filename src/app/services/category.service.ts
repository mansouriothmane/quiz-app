import { inject, Injectable } from '@angular/core';
import { Category } from '../model/category.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);
  api_url = 'https://opentdb.com/api_category.php';

  selectedCategory: Category | null = null;

  getCategories() {
    return this.http.get<{ trivia_categories: Array<Category> }>(this.api_url);
  }

  setCategory(category: Category) {
    this.selectedCategory = category;
  }

  unsetCategory() {
    this.selectedCategory = null;
  }
}
