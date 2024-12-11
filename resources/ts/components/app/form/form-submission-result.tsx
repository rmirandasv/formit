import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmission } from "@/types/global";

export default function FormSubmissionResult({
  submission,
}: {
  submission: FormSubmission;
}) {
  return (
    <Card className="bg-slate-800 min-h-96">
      <CardHeader>
        <CardTitle className="text-white">
          {submission.form.name}: #{submission.id}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          {submission.details.map((detail) => (
            <div key={detail.id} className="flex flex-col">
              <label className="text-white" htmlFor={`detail_${detail.id}`}>
                {detail.form_field.label}
              </label>
              {detail.form_field.type === "text" && (
                <Input
                  id={`detail_${detail.id}`}
                  value={detail.response.join(", ")}
                  readOnly
                  className="text-white"
                />
              )}
              {detail.form_field.type === "textarea" && (
                <Textarea
                  id={`detail_${detail.id}`}
                  value={detail.response.join(", ")}
                  readOnly
                  className="text-white"
                />
              )}
              {detail.form_field.type === "checkbox" && (
                <div className="flex flex-col space-y-2">
                  {detail.form_field.options.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <Checkbox
                        checked={detail.response.includes(option)}
                        disabled
                        className="mr-2 size-5 border-white text-white"
                      />
                      <label className="text-white">{option}</label>
                    </div>
                  ))}
                </div>
              )}
              {detail.form_field.type === "radio" && (
                <RadioGroup
                  className="flex flex-col space-y-2"
                  defaultValue={detail.response[0]}
                >
                  {detail.form_field.options.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <RadioGroupItem
                        value={option}
                        disabled
                        className="mr-2 text-white border-white size-5"
                      />
                      <label className="text-white">{option}</label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
