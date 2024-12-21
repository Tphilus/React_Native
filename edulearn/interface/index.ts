export interface Course {
    id: string;
    title: string;
    subtitle: string;
    image_480x270: string;
    is_paid: boolean;
    price: string;
    num_review: number;
}

export interface SearchResponse{
    result: Course[];
}

// Category 
export interface Category {
    id: string;
    name: string;
    icon: string;
  }
  