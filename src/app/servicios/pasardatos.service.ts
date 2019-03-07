import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Clase pasarela cuya función es recoger o asignar datos
 */
export class PasardatosService {
  private nombre: string;
  private dni: string;
  private fecha: string;
  private deporte: string;
  private polideportivo: string;
  private data: string;

  constructor() { }

  /**
   * @return nombre
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   *
   * @param value
   */
  setNombre(value: string) {
    this.nombre = value;
  }

  /**
   * @return dni
   */
  getDni(): string {
    return this.dni;
  }

  /**
   *
   * @param value
   */
  setDni(value: string) {
    this.dni = value;
  }

  /**
   * @return fecha
   */
  getFecha(): string {
    return this.fecha;
  }

  /**
   *
   * @param value
   */
  setFecha(value: string) {
    this.fecha = value;
  }

  /**
   * @return deporte
   */
  getDeporte(): string {
    return this.deporte;
  }

  /**
   *
   * @param value
   */
  setDeporte(value: string) {
    this.deporte = value;
  }

  /**
   * @return polideportivo
   */
  getPolideportivo(): string {
    return this.polideportivo;
  }

  /**
   *
   * @param value
   */
  setPolideportivo(value: string) {
    this.polideportivo = value;
  }

  /**
   * @return data
   */
  getData(): string {
   return this.data;
  }

  /**
   *
   * @param value
   */
  setData(value: any) {
    this.data = value;
  }
}
