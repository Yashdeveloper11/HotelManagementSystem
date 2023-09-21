import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../class/booking';
import { Hotel } from '../class/hotel';
import { Payment } from '../class/payment';
import { User } from '../class/user';
import { Location } from 'src/app/class/location';

@Injectable({
  providedIn: 'root'
})
export class HotelBookingSystemService {
  getPaymentsdata: any;
  getAllBookingdata() {
    throw new Error('Method not implemented.');
  }
  deletePayment(id: number) {
    throw new Error('Method not implemented.');
  }
  getAllPayments() {
    throw new Error('Method not implemented.');
  }

  private baseURL = 'http://localhost:8990';
 

  constructor(private httpClient: HttpClient) {}

  //User CRUD Operations

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/users/list', user);
  }

  getAllUsers() {
    return this.httpClient.get(`${this.baseURL}` + '/users/list');
  }

  getUserByID(id: number): Observable<User> {
    return this.httpClient.get<User>(
      `${this.baseURL}` + '/users/list' + `/${id}`
    );
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/users/list', user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}` + '/users/list' + `/${id}`);
  }

  //Hotel CRUD Operations

  getAllHotels() {
    return this.httpClient.get(`${this.baseURL}` + '/hotels/list');
  }

  getHotelByID(id: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>(
      `${this.baseURL}` + '/hotels/list' + `/${id}`
    );
  }

  createHotel(hotel: Hotel): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/hotels/list', hotel);
  }

  updateHotel(id: number, hotel: Hotel): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/hotels/list', hotel);
  }

  deleteHotel(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}` + '/hotels/list' + `/${id}`
    );
  }

  getHotelByLocation(locationName: string): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/hotels/getHotelByLocation/${locationName}`);
  }

  // Location CRUD operations

  getAllLocations() {
    return this.httpClient.get(`${this.baseURL}` + '/locations/list');
  }

  getLocationByID(id: number): Observable<Location> {
    return this.httpClient.get<Location>(
      `${this.baseURL}` + '/locations/list' + `/${id}`
    );
  }

  createLocation(location: Location): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/locations/list', location);
  }

  updateLocation(id: number, location: Location): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/locations/list', location);
  }

  deleteLocation(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}` + '/locations/list' + `/${id}`
    );
  }

  //Booking CRUD operations
  getAllBookings() {
    return this.httpClient.get(`${this.baseURL}` + '/bookings/list');
  }

  getBookingByID(id: number): Observable<Booking> {
    return this.httpClient.get<Booking>(
      `${this.baseURL}` + '/bookings/list' + `/${id}`
    );
  }

  createBooking(booking: Booking): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/bookings/list', booking);
  }

  updateBooking(id: number, booking: Booking): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/bookings/list', booking);
  }

  deleteBooking(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}` + '/bookings/list' + `/${id}`
    );
  }
 
  //payment C operation
  getAllPaymentsdata() {
    return this.httpClient.get(`${this.baseURL}` + '/payments/list');
  }
  
  getPaymentByID(id: number): Observable<Payment> {
    return this.httpClient.get<Payment>(
      `${this.baseURL}` + '/payments/list' + `/${id}`
    );
  }

  createPayment(payment: Payment): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/payments/list', payment);
  }


}