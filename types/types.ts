export interface IEvent {
  id: string;
  title?: string;
  description?: string;
  Venue?: string;
  Date?: string;
  Time?: string;
  Attendees?: string;
  gallery?: string[];
  images?: string[];
}

export interface IEvents {
  data: IEvent[];
}

//  Mappings
// "title"          =>  eventDetails?.name
// "description"    =>  eventDetails?.description
// "Venue"          =>  eventDetails?.venue
// "Date"           =>  eventDetails?.local_date
// "Time"           =>  eventDetails?.local_time
// "Attendees"      =>  eventDetails?.rsvp_limit
// "gallery"        =>  eventDetails?.images
