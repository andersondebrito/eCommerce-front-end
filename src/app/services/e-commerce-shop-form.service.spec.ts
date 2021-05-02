import { TestBed } from '@angular/core/testing';

import { ECommerceShopFormService } from './e-commerce-shop-form.service';

describe('ECommerceShopFormService', () => {
  let service: ECommerceShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ECommerceShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
