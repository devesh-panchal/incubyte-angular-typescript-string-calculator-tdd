import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should return 0 for an empty string', () => {
    expect(service.add("")).toBe(0);
  });

  it('should return the number itself if only one number is in the string', () => {
    expect(service.add("1")).toBe(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(service.add("1,2")).toBe(3);
  });

  it('should handle newlines as delimiters', () => {
    expect(service.add("1\n2,3")).toBe(6);
  });
});
