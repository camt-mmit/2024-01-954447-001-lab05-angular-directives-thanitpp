import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-section.component.html',
})
export class DynamicSectionComponent {
  form: FormArray;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.array([this.createSection()]);
  }

  // สร้าง Section ใหม่
  createSection(): FormGroup {
    return this.fb.group({
      inputs: this.fb.array<FormControl>([new FormControl('')]),
    });
  }

  // ดึง Section FormArray
  get sections(): FormArray {
    return this.form as FormArray;
  }

  // ดึง Input FormArray ของแต่ละ Section (แก้ไขให้เป็น FormArray<FormControl>)
  getInputs(sectionIndex: number): FormArray<FormControl> {
    return this.sections
      .at(sectionIndex)
      .get('inputs') as FormArray<FormControl>;
  }

  // เพิ่ม Section
  addSection() {
    this.sections.push(this.createSection());
  }

  // ลบ Section (ต้องมีอย่างน้อย 1)
  removeSection(index: number) {
    if (this.sections.length > 1) {
      this.sections.removeAt(index);
    }
  }

  // เพิ่ม Input ใน Section
  addInput(sectionIndex: number) {
    this.getInputs(sectionIndex).push(new FormControl(''));
  }

  // ลบ Input ใน Section (ต้องมีอย่างน้อย 1)
  removeInput(sectionIndex: number, inputIndex: number) {
    const inputs = this.getInputs(sectionIndex);
    if (inputs.length > 1) {
      inputs.removeAt(inputIndex);
    }
  }

  // คำนวณผลรวมค่าที่ป้อนในแต่ละ Section
  getTotal(sectionIndex: number): number {
    return this.getInputs(sectionIndex)
      .value.map((value) => parseFloat(value) || 0) // แปลงค่าให้เป็นตัวเลข ถ้าเว้นว่างให้เป็น 0
      .reduce((sum, num) => sum + num, 0); // รวมค่าในอาร์เรย์
  }
}
