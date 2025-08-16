import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-books',
  standalone: true, // standalone
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books implements OnInit {

  libros: any[] = [];

  async ngOnInit() {
    await this.getLibros();
  }

  async getLibros() {
    try {
      const response = await fetch('http://localhost:3000/api/libros');
      const data = await response.json();
      this.libros = data;
    } catch (error) {
      console.error('Error al obtener libros', error);
    }
  }
}
